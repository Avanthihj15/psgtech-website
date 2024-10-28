import { useState } from "react";
import './styles.css';

const AwardsMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className="menu-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
        <p className="menu-item">
        Awards <span className="arrow"></span>
      </p>
        <div className="submenu">
            <div className="main-menu">
              <p className="submenu-item">Distinguished Alumni Award</p>
              <p className="submenu-item">Best Outgoing Student Award</p>
            </div>
        </div>
    </div>
  );
};

export default AwardsMenu;
