import '../styles.css';

const Departments: React.FC = () => {
  const departmentList = [
    "Department 1", "Department 2", "Department 3", "Department 4", "Department 5",
    "Department 6", "Department 7", "Department 8", "Department 9", "Department 10",
    "Department 11", "Department 12", "Department 13", "Department 14", "Department 15",
    "Department 16", "Department 17", "Department 18", "Department 19", "Department 20",
    "Department 21", "Department 22", "Department 23", "Department 24", "Department 25",
    "Department 26", "Department 27", "Department 28", "Department 29", "Department 30"
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
      <div className="departments-submenu">
        {departmentList.map((department, index) => (
          <p key={index} className="departments-submenu-item">
            <a href={`#${department.replace(/\s+/g, '-').toLowerCase()}`}>{department}</a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Departments;
