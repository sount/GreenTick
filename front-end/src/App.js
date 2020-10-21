import React from 'react';
import ConnectionReport from './Component/ConnectionReport';
import Login from './Component/Login';
import History from './Component/History';
import HeaderNavigation from './Component/HeaderNavigation';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
      <HeaderNavigation/>
      <Login/>
      <ConnectionReport/>
      <History/>
    </>
  );
}

export default App;
