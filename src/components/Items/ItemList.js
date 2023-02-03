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
    console.log(item);
    try {
      const deletedItem = await deleteItem(item);
      setItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== item));
    } catch (e) {
      console.error(e.message);
    }
  };
  console.log(items);
  return (
    <div className="handle-box">
      {items.map((item) => (
        <div key={item.id}>
          {item.name} {item.complete}
          <input onChange={() => handleChange(item)} checked={item.complete} type="checkbox" />
          <button onClick={() => handleDeleteItem(item.id)}>🚮</button>
        </div>
      ))}
    </div>
  );
}
