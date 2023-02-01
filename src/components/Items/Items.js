import { Redirect } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import ItemForm from './ItemForm';
import ItemsList from './ItemList';

export default function Items() {
  const { user } = useUserContext();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <div className="main">
      <ItemsList />
      <ItemForm />
    </div>
  );
}
