import { createContext, useEffect, useState } from 'react';
import { getItem } from '../services/items';
import { useUserContext } from './UserContext';

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const { user } = useUserContext();
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItem();
        setItems(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchItems();
  }, [user]);

  return <ItemsContext.Provider value={{ items, setItems }}>{children}</ItemsContext.Provider>;
};

export { ItemsContext, ItemsProvider };
