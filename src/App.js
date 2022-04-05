import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashBoard from './Components/Authentication/Dashboard/DashBoard';
import LogIn from './Components/Authentication/login';

function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/Dashboard" exact component={DashBoard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
