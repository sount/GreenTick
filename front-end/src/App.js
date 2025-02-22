import React from 'react';
import HeaderNavigation from './Component/HeaderNavigation';
import AppFooter from './Component/Footer';
import Body from './Component/Body';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import LoginSystem from './Component/Login/LoginSystem';

function App() {
  document.body.style = "background: #f1fdf1;"

  return (
    <Router>
      <HeaderNavigation/>
        <Switch>
          <Route path="/" exact>
            <LoginSystem/>
          </Route>
          <Route path="/body">
            <Body/>
          </Route>
        </Switch>
      <AppFooter/>
    </Router>
  );
}


export default App;
