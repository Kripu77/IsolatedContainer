import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const ReactSlider = () => {
    var settings = {
      
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 1000,
      cssEase: "linear"
    };
 return (
   <div className=" py-8 max-w-sm mx-auto ">
     <Slider {...settings} className="text-xs">
       <h1>Welcome</h1>
       <h3>Marpha Next Gen </h3>
       <h1>Blockchain on Ethereum!</h1>
       <h1>Launch: 2022/08/07</h1>
       <h1>Launch: 2022/08/07</h1>
     </Slider>
   </div>
 );
};

export default ReactSlider;
