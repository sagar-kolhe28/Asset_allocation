import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Assets from './Components/Assets/Assets';
import './App.css';
import SideBar from './Components/Authentication/Dashboard/SideBar';
// import AssetForm from './Components/Assets/AssetForm';
import LogIn from './Components/Authentication/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/Dashboard" exact component={SideBar} />
          <Route path="/Assets" exact component={Assets} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
