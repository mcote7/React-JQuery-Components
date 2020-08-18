import React,{ useEffect } from 'react';
import $ from 'jquery';
import ScrollIntoView from 'react-scroll-into-view';

const Navbar = () => {
  useEffect(()=> {
    $("#navbarDropdown").mouseenter(function(){
        $("#cote").addClass("show")
        $("#navbarDropdown").addClass("arr")
      })
    $("#cote").mouseenter(function(){
        $("#cote").addClass("show")
      })
    $("#cote").mouseleave(function(){
        $("#cote").removeClass("show")
        $("#navbarDropdown").removeClass("arr")
      })
  });
// -----------------------------------------
  $(window).on('scroll', function() {
    const nav = document.getElementById("navigation");
    const scrollHeight = $(this).scrollTop();
    console.log( scrollHeight );
    scrollHeight > 120 ?
    $(nav).removeClass("navFixedTop") && $(nav).addClass("sticky-top")
    :
    $(nav).removeClass("sticky-top") && $(nav).addClass("navFixedTop")
  });
// ------------------------------------------------------------------------

  return (
  <nav id="navigation" className="navbar navFixedTop navbar-expand-lg navbar-light bg-purp">
    <a className="navbar-brand" href="/">REACT</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>

        <li className="nav-item dropdown">

          <a className="nav-link dropdown-toggle" href="/"
          id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>

          <div id="cote" className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/">Action</a>
            <a className="dropdown-item" href="/">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/">Something else here</a>
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