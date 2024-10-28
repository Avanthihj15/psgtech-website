import React from 'react';
import { useLocation } from 'react-router-dom';
import './BottomBar.css';
//import CollegeMenu from "./BottomBarComponents/CollegeMenu";
//import AcademicsMenu from "./BottomBarComponents/AcademicsMenu";
//import AwardsMenu from "./BottomBarComponents/AwardsMenu";

const BottomBar: React.FC = () => {
  const location = useLocation(); // Use this hook to get the current route

  return (
    <div className={`bottom-bar ${location.pathname === '/explore' ? 'explore-nav' : ''}`}>
      <div className="bottom-bar-section" style={{fontWeight: 600, color: 'var(--primary-color)'}}>
        <div></div>
        <p>Home</p>
        <p>About Us</p>
        <p>Academics</p>
        <p>Admissions</p>
        <p>Exams</p>
      </div>
      <div className="bottom-bar-section" style={{fontWeight: 600, color: 'var(--primary-color)'}}>
        <p>NAAC</p>
        <p>Research</p>
        <p>Industry</p>
        <p>InduTech</p>
        <p>NIRF & ARIIA</p>
        <div></div>
      </div>
    </div>
  );
};

export default BottomBar;