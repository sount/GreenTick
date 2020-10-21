import React from 'react';
import ConnectionReport from './Component/ConnectionReport';
import History from './Component/History';
import HeaderNavigation from './Component/HeaderNavigation';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppFooter from './Component/Footer';
import LoginSystem from './Component/LoginSystem';


function App() {
  return (
    <>
      <HeaderNavigation/>
      <LoginSystem/>
      <ConnectionReport/>
      <History/>
      <AppFooter/>
    </>
  );
}

export default App;
