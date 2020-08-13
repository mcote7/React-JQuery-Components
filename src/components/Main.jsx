import React from 'react';
import $ from 'jquery';

const Main = () => {
  $(document).ready(function(){
    $(document).scroll(function(evt){
    var v2 = Math.abs($('.mainContainer').position().top - $(window).height()/2);
    var v1 = $(this).scrollTop();
        if( v1 > v2 ){
      console.log('in');
        $('.leftDiv').addClass('slideLeft');
        $('.rightDiv').addClass('slideRight');
      }
    });
    });
  return (
    <div id="mike" className="mainContainer">
      <div className="leftDiv"></div>
      <div className="rightDiv"></div>
    </div>
  );
}

export default Main;