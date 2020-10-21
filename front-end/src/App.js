import React from 'react';
import ConnectionReport from './Component/Login/ConnectionReport';
import HeaderNavigation from './Component/HeaderNavigation';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppFooter from './Component/Footer';
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
