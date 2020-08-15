import React, { useState } from 'react';
import '../CSS/words.css';
import $ from 'jquery';

const Words = () => {

  const [colors, setColors] = useState(261);
  const [bgColorsDEG, setBgColorsDEG] = useState(0);
  const [bgColorsPER, setBgColorsPER] = useState(100);

  $(document).ready(function(){
    $(document).scroll(function(evt){
    var v2 = Math.abs($('.newRow').position().top - $(window).height()/4);
    var v1 = $(this).scrollTop();
        if( v1 > v2 ){
        $('.wordBoxLeft').addClass('wordBoxLeftb4');
        $('.wordBoxRight').addClass('wordBoxRightb4');
      }
        if( v1 < v2){
        $('.wordBoxLeft').removeClass('wordBoxLeftb4');
        $('.wordBoxRight').removeClass('wordBoxRightb4');
      }
    });
    });

  const handleColor = () => {
    console.log("mouse over");
    setColors(colors+5);
    setBgColorsDEG(bgColorsDEG+5);
    setBgColorsPER(60);
  }
  const handleReset = () => {
    setColors(261);
    setBgColorsDEG(0);
    setBgColorsPER(100);
  }
  const handleClick = () => {
    document.getElementById("colors").animate(
      [{transform: 'rotate(360deg)'}, {transform: 'rotate(0deg)'}],
      {duration: 1000, iterations: 1});
  }

  return (
    <>
    <div className="newRow">
      <div className="colLeft">
        <div id="left" className="wordBoxLeft"></div>
      </div>
      <div className="colRight">
        <div className="wordBoxRight"></div>
      </div>
    </div>
    <div className="newRow2" style={{backgroundColor: `hsl(${bgColorsDEG}deg 100% ${bgColorsPER}%)`}}>
      <div className="colorsCont">
        <div id="colors" className="colors" style={{backgroundColor: `hsl(${colors}deg 92% 60%)`}} onClick={handleClick} onMouseMove={handleColor} onMouseOut={handleReset}></div>
      </div>
    </div>
    </>
  );
}
export default Words;