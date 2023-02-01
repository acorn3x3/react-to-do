import { useContext, useState } from 'react';
import { ItemsContext } from '../../context/ItemsContext';
import { createItem } from '../../services/items';

export default function ItemForm() {
  const [name, setName] = useState('');
  const [complete, setComplete] = useState(false);

  const { setItems } = useContext(ItemsContext);
  const handleNewItem = async () => {
    try {
      const item = await createItem(name, complete);
      setItems((prev) => [...prev, item]);
      setName('');
      setComplete(true);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="item-form">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {/* <input value={complete} onChange={(e) => setName(e.target.value)} /> */}

      <button className="submit-button" onClick={handleNewItem}>
        Add
      </button>
    </div>
  );
}
