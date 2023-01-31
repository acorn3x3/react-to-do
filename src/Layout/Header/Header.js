import { useContext } from 'react';
import { useUserContext } from '../../context/UserContext';
import { signOut } from '../../services/auth';

export default function Header() {
  // const [isActive, setIsActive] = useState(false);

  const { setUser } = useContext(useUserContext);

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <nav>
      <div>hello</div>
      <button className="LObutton" onClick={handleLogout}>
        Sign Out
      </button>
    </nav>
  );
}
