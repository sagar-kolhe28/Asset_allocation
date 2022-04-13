import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Assets from './Components/Assets/Assets';
import './App.css';
import LogIn from './Components/Authentication/login';
import DashBoard from './Components/DashBoard';
import Pay from './Components/Pay';
import Reimbursement from './Components/Reimbursement';
import Leaves from './Components/Leaves';
import TaxDeclaration from './Components/TaxDeclaration';
import ImportantDoc from './Components/ImportantDoc';
import PendingDoc from './Components/PendingDoc';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/Assets" exact component={Assets} />
          <Route path="/DashBoard" exact component={DashBoard} />
          <Route path="/Pay" exact component={Pay} />
          <Route path="/Leaves" exact component={Leaves} />
          <Route path="/TaxDeclaration" exact component={TaxDeclaration} />
          <Route path="/ImportantDoc" exact component={ImportantDoc} />
          <Route path="/Reimbursement" exact component={Reimbursement} />
          <Route path="/PendingDoc" exact component={PendingDoc} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
