import React from 'react';
import $ from 'jquery';

const Footer = () => {

  $(window).on('scroll', function() {
    console.log($("#footer"))
    const scrollHeight = $(this).scrollTop();
    if(scrollHeight > 120) {
      $("#footer").css({"padding": "10px 10px", "backgroundColor": "rgb(207, 182, 255)"});
      $("#logo").css({"fontSize": "15px", "transform": "rotate(360deg)"});
    }
    if(scrollHeight < 120) {
      $("#footer").css({"padding": "205px 10px", "backgroundColor": "rgb(241, 235, 255)"});
      $("#logo").css({"fontSize": "72px", "transform": "rotate(0deg)"});
    }
  });
//-------------------------------------------------------------------------

  return (
    <div id="footer" className="footer">
      <div className="row" style={{width: "100%", display: "grid"}}>
        <div id="logo" className="logo">Michael Cote</div>
        <strong>made with react & jquery 2020</strong>
      </div>
    </div>
  );
}
export default Footer;