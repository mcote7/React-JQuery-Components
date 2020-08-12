import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar/>
          <Main/>
      </div>
    </div>
  );
}

export default App;
