import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Popups from './components/Popups';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar/>
        <Popups/>
      </div>
    </div>
  );
}

export default App;
