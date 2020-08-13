import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Popups from './components/Popups';
import Main from './components/Main';

const App = () => {

  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar/>
        <Popups/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
