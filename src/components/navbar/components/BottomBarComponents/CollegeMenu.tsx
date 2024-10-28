import { useState } from "react";
import './styles.css';
//import AdministrationMenu from './TheCollegeComponents/AdministrationMenu';

const CollegeMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAdministrationOpen, setIsAdministrationOpen] = useState<boolean>(false);

  // Open the menu
  const handleMouseOver = () => {
    setIsOpen(true);
  };

  // Close the entire menu, including Administration submenu
  const handleMouseOut = () => {
    setIsOpen(false);
    setIsAdministrationOpen(false);
  };

  // Only open the Administration submenu
  const handleAdministrationMouseEnter = () => {
    setIsAdministrationOpen(true);
  };

  // Close Administration submenu
  const handleAdministrationMouseLeave = () => {
    setIsAdministrationOpen(false);
  };

  return (
    <div
      className="menu-container"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}  // Close the entire menu when mouse leaves the container
    >
      <p className="menu-item">
        The College <span className="arrow"></span>
      </p>
      {isOpen && (
        <div className={`submenu ${isAdministrationOpen ? 'expanded' : ''}`}>
          {!isAdministrationOpen ? (
            <div className="main-menu">
              <p className="submenu-item">About PSG Tech</p>
              <p className="submenu-item">Vision & Mission</p>
              <p className="submenu-item">Governing Council</p>
              <p className="submenu-item">PSG and Sons' Charities</p>
              <p className="submenu-item">Principals</p>
              <p
                className="submenu-item"
                onMouseOver={handleAdministrationMouseEnter}  // Open Administration submenu
              >
                Administration <span className="right-arrow"></span>
              </p>
            </div>
          ) : (
            <div
              className="departments-container"
              onMouseOut={handleAdministrationMouseLeave}  // Close only the Administration submenu
            >
              
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CollegeMenu;
