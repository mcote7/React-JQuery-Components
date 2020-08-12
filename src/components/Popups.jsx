import React, {useEffect} from 'react';
import $ from 'jquery';
import '../CSS/popups.css';

const Popups = () => {
  useEffect(()=> {
    $("#hoverone").mouseenter(function(){
        $("#popone").addClass(" appear")
      })
    $("#popone").mouseenter(function(){
        $("#popone").addClass(" appear")
      })
    $("#popone").mouseleave(function(){
        $("#popone").removeClass(" appear")
      })
    //----------------------------------------------
    $("#hovertwo").mouseenter(function(){
        $("#poptwo").addClass(" appear")
      })
    $("#poptwo").mouseenter(function(){
        $("#poptwo").addClass(" appear")
      })
    $("#poptwo").mouseleave(function(){
        $("#poptwo").removeClass(" appear")
      })
    //-----------------------------------------------
    $("#hoverthree").mouseenter(function(){
        $("#popthree").addClass(" appear")
      })
    $("#popthree").mouseenter(function(){
        $("#popthree").addClass(" appear")
      })
    $("#popthree").mouseleave(function(){
        $("#popthree").removeClass(" appear")
      })
    //-----------------------------------------------
    $("#hoverfour").mouseenter(function(){
        $("#popfour").addClass(" appear")
      })
    $("#popfour").mouseenter(function(){
        $("#popfour").addClass(" appear")
      })
    $("#popfour").mouseleave(function(){
        $("#popfour").removeClass(" appear")
      })
  })
  return (
    <div className="popCont">
      <h1 className="poptitle">
        <span id="hoverone">hover</span>&nbsp;
        <span id="hovertwo">over&nbsp;</span>
        <span id="hoverthree">these</span>&nbsp;
        <span id="hoverfour">words</span>
      </h1>
      <div id="popone" className="boxOne">
        <p>hello</p><hr/>
        <p>hello</p><hr/>
        <p>hello</p><hr/>
        <p>hello</p>
      </div>
      <div id="poptwo" className="boxTwo">
        <p>hello</p><hr/>
        <p>hello</p>
      </div>
      <div id="popthree" className="boxThree">
        <p>hello</p><hr/>
        <p>hello</p>
      </div>
      <div id="popfour" className="boxFour">
        <p>hello</p><hr/>
        <p>hello</p><hr/>
        <p>hello</p><hr/>
        <p>hello</p>
      </div>
    </div>
  );
}

export default Popups;