import React from 'react';
import HeaderNavigation from './Component/HeaderNavigation';
import AppFooter from './Component/Footer';
import Body from './Component/Body';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  document.body.style = "background: #22687B;"

  return (
    <>
      <HeaderNavigation/>
        <Body/>
        
      <AppFooter/>
    </>
  );
}

export default App;
