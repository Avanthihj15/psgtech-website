import '../styles.css';

const Programmes: React.FC = () => {
  const programmesList = [
    "UG Programmes", "PG Programmes", "MBA", "MCA", "2 year MSc", "5 year integrated MSc", "Bsc"
  ];

  return (
    <div className="departments-container">
      <div className="main-menu">
        <p className="submenu-item">Programmes</p>
        <p className="submenu-item">Departments</p>
        <p className="submenu-item">Admissions</p>
        <p className="submenu-item">Scholarship</p>
        <p className="submenu-item">Placement</p>
        <p className="submenu-item">Hostel</p>
        <p className="submenu-item">Library</p>
        <p className="submenu-item">Sports</p>
        <p className="submenu-item">COE - Centres of Excellence</p>
      </div>
      <div className="separator-line"></div>
      <div className="others-submenu">
        {programmesList.map((programme, index) => (
          <p key={index} className="others-submenu-item">
            <a href={`#${programme.replace(/\s+/g, '-').toLowerCase()}`}>{programme}</a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Programmes;
