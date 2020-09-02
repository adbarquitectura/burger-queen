import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";
import ChefView from './components/chef-components/Chef-view';
import WaiterView from './components/waiter-components/Waiter-view';
import SignInView from './components/sign-in-components/Sign-in-view';


function App() { 
  return (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/" exact="true">Home</Link>
          </li>
          <li>
            <Link to="/waiter">Waiter</Link>
          </li>
          <li>
            <Link to="/chef">Chef</Link>
          </li>
        </ul> */}
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
