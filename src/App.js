import './App.css';
import Auth from './components/Auth/Auth';
import Header from './Layout/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Items from './components/Items/Items';
import Footer from './Layout/Footer/Footer';

function App() {
  return (
    <div className="toplevel">
      <Header />
      <br></br>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="items" component={Items} />
        <Route exact path="/"></Route>
      </Switch>

      <Items />
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
