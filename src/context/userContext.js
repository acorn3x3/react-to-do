const { createContext, useContext, useState } = require('react');
const { getUser } = require('../services/auth');

const UserContext = createContext();
/////////////////////////////////

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
/////////////////////////////////
const useUserContext = () => {
  const data = useContext(UserContext);

  if (!data) {
    throw new Error('useUser must be in a UserProvider');
  }
  return data;
};

export { UserProvider, useUserContext };
/////////////////////////////////
