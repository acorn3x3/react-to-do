import { ItemsContext } from '../../context/ItemsContext';
import { useContext } from 'react';
import { toggleListItem } from '../../services/items';

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
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <label className="checkbox">
            <input onChange={() => handleChange(item)} checked={item.complete} />
            {item.name} {item.complete}
          </label>
        </div>
      ))}
    </>
  );
}
