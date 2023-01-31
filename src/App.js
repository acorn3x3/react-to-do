import './App.css';
import Auth from './components/Auth/Auth';
import Header from './Layout/Header/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import Items from './components/Items/Items';
import Footer from './Layout/Footer/Footer';
import Main from './Layout/Main/Main';
// import { useContext } from 'react';
import { useUserContext } from './context/UserContext';

function App() {
  const { user } = useUserContext();

  return (
    <div className="toplevel">
      <Header />
      <br></br>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/items" component={Items} />
        <Route exact path="/" component={Main}>
          <>
            {user && <Redirect to="/items" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>

      <Items />
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
