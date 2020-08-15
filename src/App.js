import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Popups from './components/Popups';
import Main from './components/Main';
// import Api from './components/Api';
import Words from './components/Words';

const App = () => {

  return (
      <div className="container-fluid app-center">
        <Navbar/>
        <Popups/>
        <Main/>
        {/* <Api/> */}
        <Words/>
      </div>
  );
}

export default App;
