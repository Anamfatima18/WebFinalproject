
// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import "./nav.css";
// // import 'rsuite/dist/rsuite.min.css';
// // import CodeIcon from '@rsuite/icons/Code';
// // const SideNavBar = () => {
// //   return (
// //     <div className="side-nav-container">
// //       <div className="nav-heading">
// //         <h2>Admin</h2>
// //       </div>
// //       <div className="nav-menu">
// //         <Dropdown title="Student    >" icon={<CodeIcon />}>
// //           <DropdownItem text="Add" link="/student/add" />
// //           <DropdownItem text="Delete" link="/student/delete" />
// //           <DropdownItem text="Update" link="/student/update" />
// //           <DropdownItem text="View" link="/student/view" />
// //         </Dropdown>
// //         <Dropdown title="Teacher">
// //           <DropdownItem text="Add" link="/teacher/add" />
// //           <DropdownItem text="Delete" link="/teacher/delete" />
// //           <DropdownItem text="Update" link="/teacher/update" />
// //           <DropdownItem text="View" link="/teacher/view" />
// //         </Dropdown>
// //         <Dropdown title="Course Designer">
// //           <DropdownItem text="Add" link="/course-designer/add" />
// //           <DropdownItem text="Delete" link="/course-designer/delete" />
// //           <DropdownItem text="Update" link="/course-designer/update" />
// //           <DropdownItem text="View" link="/course-designer/view" />
// //         </Dropdown>
// //       </div>
// //     </div>
// //   );
// // };

// // const Dropdown = ({ title, children }) => {
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// //   const toggleDropdown = () => {
// //     setIsDropdownOpen(!isDropdownOpen);
// //   };

// //   return (
// //     <div className="dropdown">
// //       <button className="dropdown-btn" onClick={toggleDropdown}>
// //         {title}
// //       </button>
// //       <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
// //         {children}
// //       </div>
// //     </div>
// //   );
// // };

// // const DropdownItem = ({ text, link }) => {
// //   return (
// //     <Link to={link} className="dropdown-item">
// //       {text}
// //     </Link>
// //   );
// // };

// // export default SideNavBar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./nav.css";

// const SideNavBar = () => {
//   return (
//     <div className="side-nav-container">
//       <div className="nav-heading">
//         <h2>Admin</h2>
//       </div>
//       <div className="nav-menu">
//         <ButtonWithSubButtons
//           title="Student"
//           subButtons={[
//             { text: "Add", link: "/student/add" },
//             { text: "Delete", link: "/student/delete" },
//             { text: "Update", link: "/student/update" },
//             { text: "View", link: "/student/view" },
//           ]}
//         />
//         <ButtonWithSubButtons
//           title="Teacher"
//           subButtons={[
//             { text: "Add", link: "/teacher/add" },
//             { text: "Delete", link: "/teacher/delete" },
//             { text: "Update", link: "/teacher/update" },
//             { text: "View", link: "/teacher/view" },
//           ]}
//         />
//         <ButtonWithSubButtons
//           title="Course Designer"
//           subButtons={[
//             { text: "Add", link: "/course-designer/add" },
//             { text: "Delete", link: "/course-designer/delete" },
//             { text: "Update", link: "/course-designer/update" },
//             { text: "View", link: "/course-designer/view" },
//           ]}
//         />
//       </div>
//     </div>
//   );
// };

// const ButtonWithSubButtons = ({ title, subButtons }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleSubButtons = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="button-with-sub-buttons">
//       <button className="main-button" onClick={toggleSubButtons}>
//         {title}
//         <span className={`dropdown-icon ${isExpanded ? "rotate" : ""}`}>&#9662;</span>
//       </button>
//       <div className={`sub-buttons ${isExpanded ? "show" : ""}`}>
//         {subButtons.map(({ text, link }) => (
//           <Link to={link} className="sub-button" key={text}>
//             {text}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SideNavBar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const SideNavBar = () => {
  return (
    <div className="side-nav-container">
      <div className="nav-heading">
        <h2>Admin</h2>
      </div>
      <div className="nav-menu">
        <ButtonWithSubButtons
          title="Student"
          subButtons={[
            { text: "Add", link: "/student/add" },
            { text: "Delete", link: "/student/delete" },
            { text: "Update", link: "/student/update" },
            { text: "View", link: "/student/view" },
          ]}
        />
        <ButtonWithSubButtons
          title="Teacher"
          subButtons={[
            { text: "Add", link: "/teacher/add" },
            { text: "Delete", link: "/teacher/delete" },
            { text: "Update", link: "/teacher/update" },
            { text: "View", link: "/teacher/view" },
          ]}
        />
        <ButtonWithSubButtons
          title="Course Designer"
          subButtons={[
            { text: "Add", link: "/course-designer/add" },
            { text: "Delete", link: "/course-designer/delete" },
            { text: "Update", link: "/course-designer/update" },
            { text: "View", link: "/course-designer/view" },
          ]}
        />
      </div>
    </div>
  );
};

const ButtonWithSubButtons = ({ title, subButtons }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSubButtons = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="button-with-sub-buttons">
      <button className="main-button" onClick={toggleSubButtons}>
        {title}
        <span className={`dropdown-icon ${isExpanded ? "rotate" : ""}`}>&#9662;</span>
      </button>
      <div className={`sub-buttons ${isExpanded ? "show" : ""}`}>
        {subButtons.map(({ text, link }) => (
          <Link to={link} className="sub-button" key={text}>
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNavBar;
