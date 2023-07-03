import logo from './holberton-logo.jpg';
import './App.css';
import  { getFullYear, getFooterCopy }  from './utils.js';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='Holberton-logo' alt="Holberton logo"/>
        <h1>School dashboard</h1>
      </header>

      <body className='App-body'>
        <p>Login to access the full dashboard</p>
      </body>

      <footer className='App-footer'>
        <p>Copyright { getFullYear() } { getFooterCopy("True") }</p>

      </footer>
    </div>
  );
}

export default App;
