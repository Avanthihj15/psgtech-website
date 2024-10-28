import React from "react";
import './Explore.css'; // Optional: create a separate CSS file for styles
import exp from '../pages/exp.jpg'; // Adjust the path to your image
import { Carousel } from "react-responsive-carousel"; // Carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS
import smallImage from '../pages/yoga-day.jpg'; // Adjust the path as needed
import smallImage1 from '../pages/rconclave.jpg'; // Adjust the path as needed


const Explore: React.FC = () => {
    const textSlides = [
        { text: "A National level Innovative design protection challenge- 'Promoting Rights and Innovation through Design Excellence (IPR PRIDE-2024)'", date: '30', month: 'AUG' },
        { text: "A National level Innovative design protection challenge- 'Promoting Rights and Innovation through Design Excellence (IPR PRIDE-2024)'", date: '30', month: 'AUG'  },
        { text: "A National level Innovative design protection challenge- 'Promoting Rights and Innovation through Design Excellence (IPR PRIDE-2024)'", date: '30', month: 'AUG' },
        { text: "A National level Innovative design protection challenge- 'Promoting Rights and Innovation through Design Excellence (IPR PRIDE-2024)'", date: '30', month: 'AUG'  }
      ];

      // Function to break text into chunks of 6 words
    const formatTextIntoParagraphs = (text: string) => {
        const words = text.split(' ');
        const lines = [];
        for (let i = 0; i < words.length; i += 6) {
            lines.push(words.slice(i, i + 6).join(' ')); // Create a line with max 6 words
        }
        return lines;
    };


  return (
    <div className="explore-container">
        
         <br />
         <br />
         <br />
         <div className="explore-text">
            <h2><b>Welcome to PSG College of Technology</b></h2>
            <br />
            <div className="explore-content">
                <img 
                    src={exp}
                    alt="PSG College" 
                    className="explore-image"
                />
                <div className="p-content">
                    <p>PSG College of Technology, an ISO 9001:2015 certified institutions is one of the foremost institutions founded by the PSG & Sons’ Charities Trust (1926). The College was established in the year 1951 and the founders wisely decided to locate it in the same campus as the PSG Industrial Institute for effective industrial-institute interaction.</p>
                    <br />
                    <p>Provide world-class Engineering Education, Foster Research and Development. Evolve innovative applications of Technology.Encourage entrepreneurship. Ultimately mold young men and women capable of assuming leadership of the society for the betterment of the Country.</p>
                </div>
            </div>
            <br />
            <div className="button-container">
                <button className="explore-button">More about PSG Tech</button>
            </div>



            {/*blue navbar*/}
            {/*<div className="navbar">Explore More about PSG College</div>*/}

    <div className="navbar">
   
    <div className="sliding-text">
         
        {textSlides.map((slide, index) => (
            <div className="slide" key={index}>
                <div className="date-box">
                    <span className="date">{slide.date}</span>
                    <span className="month">{slide.month}</span>
                </div>

                
                <div className="text-content">
                {formatTextIntoParagraphs(slide.text).map((line, idx) => (
                    <p key={idx}>{line}</p>
                ))}
                </div>
            </div>
        ))}
    
    </div>
</div>
<br />
<br />
<br />


<div className="container-row">
    <div className="container-box">
        <img src={smallImage} alt="Small box image" />
        <div className="text">
            <p>Here is a brief description or text related to the image.</p>
        </div>

        <div className="date-box1">
            <span className="date">30</span>
            <span className="month">AUG</span>
        </div>
</div>

<div className="container-box">
    <img src={smallImage1} alt="Small box image" />
    <div className="text">
        <p>Here is a brief description or text related to the image.</p>
    </div>

    <div className="date-box1">
        <span className="date">30</span>
        <span className="month">AUG</span>
    </div>
</div>

<div className="container-box">
    <img src={smallImage} alt="Small box image" />
    <div className="text">
        <p>Here is a brief description or text related to the image.</p>
    </div>

    <div className="date-box1">
        <span className="date">30</span>
        <span className="month">AUG</span>
    </div>
</div>

<div className="container-box">
    <img src={smallImage1} alt="Small box image" />
    <div className="text">
        <p>Here is a brief description or text related to the image.</p>
    </div>

    <div className="date-box1">
        <span className="date">30</span>
        <span className="month">AUG</span>
    </div>
</div>

</div>
    </div>
    </div>

  );
};

export default Explore;