import React from 'react';
import PSGLogo from "../../../assests/logo.svg";
import "./TopBar.css"




const TopBar: React.FC= () => {
  return (
    <div className="top-bar" style={{ fontWeight: 400, fontSize: '13px' }}>
      <div className="top-bar-logo">
        <img src={PSGLogo} className="logo-image" alt="" />
        <h1 className="logo-text" style={{fontWeight: 600}}>PSG College of Technology</h1>
      </div>
      <p>PSG Mail</p>
      <p>Students</p>
      <p>Parents</p>
      <p>Alumni</p>
      <p>Careers</p>
      <p>IIC</p>
      <p>Contact</p>
      <div></div>
    </div>
  );
};




export default TopBar;

