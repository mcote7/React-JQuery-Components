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
    //----------------------------------------------
    $("#hoverthree").mouseenter(function(){
        $("#popthree").addClass(" appear")
      })
    $("#popthree").mouseenter(function(){
        $("#popthree").addClass(" appear")
      })
    $("#popthree").mouseleave(function(){
        $("#popthree").removeClass(" appear")
      })
    //----------------------------------------------
    $("#hoverfour").mouseenter(function(){
        $("#popfour").addClass(" appear")
      })
    $("#popfour").mouseenter(function(){
        $("#popfour").addClass(" appear")
      })
    $("#popfour").mouseleave(function(){
        $("#popfour").removeClass(" appear")
      })
    //----------new--------------------------------
    $("#shift").mouseenter(function(){
      $(".popsubtitle").animate({ top: '200px' } , 'slow')
      $(".popsubtitletop").animate({ top: '495px' }, 1200)
      })
    $("#shift").mouseleave(function(){
      $(".popsubtitle").animate({ top: '450px' } , 'slow')
      $(".popsubtitletop").animate({  top: '300px' }, 1200)
      })
    //--------------------------------------------
  })
  return (
    <div className="popCont">
      <h4 className="popsubtitle subtitle">check this out</h4>
      <h1 id="shift" className="poptitle">
        <span id="hoverone">hover</span>&nbsp;
        <span id="hovertwo">over&nbsp;</span>
        <span id="hoverthree">these</span>&nbsp;
        <span id="hoverfour">words</span>
      </h1>
      <h4 className="popsubtitletop subtitle">check this out</h4>
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