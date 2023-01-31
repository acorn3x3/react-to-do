import { Redirect } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';

export default function Items() {
  const { user } = useUserContext();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return <div className="main">hello im an Items Div!</div>;
}
