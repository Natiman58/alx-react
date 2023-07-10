import React from 'react';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import Login from './Login/Login';
import Notifications from './Notifications';


function App() {
  return (
    <>
      <Notifications />

      <Header />

      <Login />

      <Footer />
    </>
  );
}

export default App;
