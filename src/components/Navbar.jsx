import React,{ useEffect } from 'react';
import $ from 'jquery';
import ScrollIntoView from 'react-scroll-into-view';

const Navbar = () => {
  useEffect(()=> {
    $("#navbarDropdown").mouseenter(function(){
        $("#cote").addClass(" show")
        $("#navbarDropdown").addClass(" arr")
      })
    $("#cote").mouseenter(function(){
        $("#cote").addClass(" show")
      })
    $("#cote").mouseleave(function(){
        $("#cote").removeClass(" show")
        $("#navbarDropdown").removeClass(" arr")
      })
  })


  return (
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-purp">
    <a class="navbar-brand" href="/">REACT</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Link</a>
        </li>

        <li class="nav-item dropdown">

          <a class="nav-link dropdown-toggle" href="/"
          id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>

          <div id="cote" class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/">Action</a>
            <a class="dropdown-item" href="/">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="/">Something else here</a>
          </div>

        </li>
        <li>
        <ScrollIntoView selector="#mike">
          <button className="navbtn">Scroll to</button>
        </ScrollIntoView>
        </li>
      </ul>
    </div>
  </nav>
  );
}
export default Navbar;