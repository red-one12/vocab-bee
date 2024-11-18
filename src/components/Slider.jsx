import React from 'react';
import sliderImg1 from '../assets/images/Feminine Torn Paper Name YouTube Channel Art (1).png';
import sliderImg2 from '../assets/images/Feminine Torn Paper Name YouTube Channel Art (2).png';
import sliderImg3 from '../assets/images/Feminine Torn Paper Name YouTube Channel Art (3).png';
import sliderImg4 from '../assets/images/Feminine Torn Paper Name YouTube Channel Art (4).png';
import sliderImg5 from '../assets/images/Feminine Torn Paper Name YouTube Channel Art.png'; 

const Slider = () => {
  return (
    <div className="carousel h-full mx-auto">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={sliderImg3} className="w-full object-cover" alt="Slide 1" />
        <div className="absolute inset-0 flex justify-between items-center p-4">
          <a href="#slide5" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={sliderImg2} className="w-full object-cover" alt="Slide 2" />
        <div className="absolute inset-0 flex justify-between items-center p-4">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={sliderImg1} className="w-full object-cover" alt="Slide 3" />
        <div className="absolute inset-0 flex justify-between items-center p-4">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={sliderImg4} className="w-full object-cover" alt="Slide 4" />
        <div className="absolute inset-0 flex justify-between items-center p-4">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={sliderImg5} className="w-full object-cover" alt="Slide 5" />
        <div className="absolute inset-0 flex justify-between items-center p-4">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
