import { ItemsContext } from '../../context/ItemsContext';
import { useContext } from 'react';
import { toggleListItem, deleteItem } from '../../services/items';

export default function ItemsList() {
  const { items, setItems } = useContext(ItemsContext);
  const handleChange = async (item) => {
    try {
      const updatedItem = await toggleListItem(item);
      setItems((prevItems) =>
        prevItems.map((prevItem) => (prevItem.id === item.id ? updatedItem : prevItem))
      );
    } catch (e) {
      console.error(e.message);
    }
  };
  const handleDeleteItem = async (item) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const deletedItem = await deleteItem(item);
      setItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== item));
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <h1>
      TO DOS!
      <div className="handle-box">
        {items.map((item) => (
          <div key={item.id}>
            {item.name} {item.complete}
            <input
              onChange={() => handleChange(item)}
              checked={item.complete}
              type="checkbox"
            ></input>
            <button onClick={() => handleDeleteItem(item.id)}>🚮DELETE</button>
          </div>
        ))}
      </div>
    </h1>
  );
}
