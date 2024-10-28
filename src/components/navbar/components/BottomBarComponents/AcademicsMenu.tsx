import { useState } from "react";
import './styles.css';
//import Departments from './AcademicsComponents/Departments';
//import Programmes from './AcademicsComponents/Programmes';

const AcademicsMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState<boolean>(false);
  const [isProgrammesOpen, setIsProgrammesOpen] = useState<boolean>(false);

  // Open the main menu
  const handleMouseOver = () => {
    setIsOpen(true);
  };

  // Close the entire menu, including Departments and Programmes submenus
  const handleMouseOut = () => {
    setIsOpen(false);
    setIsDepartmentsOpen(false);
    setIsProgrammesOpen(false);
  };

  // Open the Programmes submenu
  const handleProgrammesMouseEnter = () => {
    setIsProgrammesOpen(true);
  };

  // Open the Departments submenu
  const handleDepartmentsMouseEnter = () => {
    setIsDepartmentsOpen(true);
  };

  // Close the Programmes submenu
  const handleProgrammesMouseLeave = () => {
    setIsProgrammesOpen(false);
  };

  // Close the Departments submenu
  const handleDepartmentsMouseLeave = () => {
    setIsDepartmentsOpen(false);
  };

  return (
    <div
      className="menu-container"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <p className="menu-item">
        Academics <span className="arrow"></span>
      </p>
      {isOpen && (
        <div
          className={`submenu ${isDepartmentsOpen || isProgrammesOpen ? 'expanded' : ''}`}
        >
          {!isDepartmentsOpen && !isProgrammesOpen ? (
            <div className="main-menu">
              <p
                className="submenu-item"
                onMouseOver={handleProgrammesMouseEnter}
              >
                Programmes <span className="right-arrow"></span>
              </p>
              <p
                className="submenu-item"
                onMouseOver={handleDepartmentsMouseEnter}
              >
                Departments <span className="right-arrow"></span>
              </p>
              <p className="submenu-item">Admissions</p>
              <p className="submenu-item">Scholarship</p>
              <p className="submenu-item">Placement</p>
              <p className="submenu-item">Hostel</p>
              <p className="submenu-item">Library</p>
              <p className="submenu-item">Sports</p>
              <p className="submenu-item">COE - Centres of Excellence</p>
            </div>
          ) : isDepartmentsOpen ? (
            <div
              className={`departments-container ${isDepartmentsOpen ? 'expanded' : ''}`}
              onMouseOut={handleDepartmentsMouseLeave}
            >
              
            </div>
          ) : isProgrammesOpen ? (
            <div
              className="departments-container"
              onMouseOut={handleProgrammesMouseLeave}
            >
              
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default AcademicsMenu;
