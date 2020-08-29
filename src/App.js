import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ChefView from './componentes routes/Chef-view';
import WaiterView from './componentes routes/Waiter-view';
import SignInView from './componentes routes/Sign-in-view';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/" exact>Home</Link>
          </li>
          <li>
            <Link to="/waiter">Waiter</Link>
          </li>
          <li>
            <Link to="/chef">Chef</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/chef">
            <ChefView />
          </Route>
          <Route path="/waiter">
            <WaiterView />
          </Route>
          <Route path="/">
            <SignInView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
