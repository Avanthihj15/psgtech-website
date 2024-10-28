import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./CarouselStyles.css";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import Image1 from "../assests/home/carousel1.jpeg";
import Image2 from "../assests/home/carousel2.jpeg";
import Image3 from "../assests/home/carousel3.jpeg";
import Logo from "../assests/logo.svg";

import './Home.css';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Correct usage of useNavigate
  
  const slides = [
    { src: Image1, caption: "Explore PSG Technology" },
    { src: Image2, caption: "Explore PSG Technology" },
    { src: Image3, caption: "Explore PSG Technology" },
  ];

  //const toggleContent = () => {
    //console.log('Toggling content');
  //setIsOpen(prevState => !prevState);
  //};

  //const toggleContent = () => {
    //setIsOpen(true); // Show the additional content
  //};

  const handleExploreClick = () => {
    navigate('/explore'); // Redirect to the /explore page
  };

  return (
    <div className="relative">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        swipeable={false}
        stopOnHover={true}
        showThumbs={false} // Hide carousel dots
        showArrows={false}
        showStatus={false}
        dynamicHeight={false}
      >
        {slides.map((slide, index) => (
          <div className="h-[40rem] relative" key={index}>
            <img src={slide.src} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-blue-700 opacity-25"></div> {/* Transparent overlay */}
          </div>
        ))}
      </Carousel>
      
      {!isOpen && (
        <div className="absolute bottom-0 left-tx right-tx transform -translate-x-1/2 w-full text-white text-center py-2 px-8 font-semibold bg-primary/85 bg-primary-overlay caption-container" onClick={handleExploreClick}>
          Explore PSG Technology
          <div className="dropdown-symbol">▼</div>
        </div>
      )}
    </div>
  );
};

export default Home;