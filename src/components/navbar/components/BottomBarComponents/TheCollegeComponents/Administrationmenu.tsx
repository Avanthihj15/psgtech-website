import '../styles.css';

const Administration: React.FC = () => {
  const administrationList = [
    "Management Trustees", "Principal", "Dean Academic", "Dean Administration", "Dean Autonomous Function", "Dean Research",
    "Dean Placement & Training", "Dean IR&D"
  ];

  return (
    <div className="departments-container">
      <div className="main-menu">
        <p className="submenu-item">About PSG Tech</p>
        <p className="submenu-item">Vision & Mission</p>
        <p className="submenu-item">Governing Council</p>
        <p className="submenu-item">PSG and Sons' Charities</p>
        <p className="submenu-item">Principals</p>
        <p className="submenu-item">Administration</p>
      </div>
      <div className="separator-line"></div>
      <div className="others-submenu">
        {administrationList.map((item, index) => (
          <p key={index} className="others-submenu-item">
            <a href={`#${item.replace(/\s+/g, '-').toLowerCase()}`}>{item}</a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Administration;

