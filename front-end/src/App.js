import React from 'react';
import ConnectionReport from './Component/Login/ConnectionReport';
import History from './Component//Data_Display/History';
import HeaderNavigation from './Component/HeaderNavigation';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppFooter from './Component/Footer';
import LoginSystem from './Component/Login/LoginSystem';
import Body from './Component/Body';


function App() {
  return (
    <>
      <HeaderNavigation/>
      <ConnectionReport/>
      <Body/>
      <AppFooter/>
    </>
  );
}

export default App;
