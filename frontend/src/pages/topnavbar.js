// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { styled } from "@mui/system";
// import {
//   AppBar,
//   Box,
//   Button,
//   Toolbar,
//   Typography,
//   IconButton,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import {
//   AccountCircleOutlined,
//   ExpandMoreOutlined,
//   ExpandLessOutlined,
//   ExitToAppOutlined,
// } from "@mui/icons-material";

// const TopNavBarContainer = styled(AppBar)({
//   backgroundColor: "#1e3f66",
//   color: "white",
// });

// const TopNavBar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [isStudentMenuOpen, setIsStudentMenuOpen] = useState(false);
//   const [isTeacherMenuOpen, setIsTeacherMenuOpen] = useState(false);
//   const [isCourseDesignerMenuOpen, setIsCourseDesignerMenuOpen] = useState(false);

//   const handleStudentMenuOpen = () => {
//     setIsStudentMenuOpen(true);
//   };

//   const handleStudentMenuClose = () => {
//     setIsStudentMenuOpen(false);
//   };

//   const handleTeacherMenuOpen = () => {
//     setIsTeacherMenuOpen(true);
//   };

//   const handleTeacherMenuClose = () => {
//     setIsTeacherMenuOpen(false);
//   };

//   const handleCourseDesignerMenuOpen = () => {
//     setIsCourseDesignerMenuOpen(true);
//   };

//   const handleCourseDesignerMenuClose = () => {
//     setIsCourseDesignerMenuOpen(false);
//   };

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleProfileMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     // Add your logout logic here
//     // For example, clear local storage, redirect to login page, etc.
//     console.log("Logout");
//   };

//   return (
//     <>
//       <TopNavBarContainer position="static">
//         <Toolbar>
//           <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1 }}>
//             LMS
//           </Typography>
//           <Button component={Link} to="/home" sx={{ color: "white", mr: 2 }}>
//             Home
//           </Button>
//           <Button
//             sx={{ color: "white", mr: 2 }}
//             onClick={handleStudentMenuOpen}
//             endIcon={
//               isStudentMenuOpen ? (
//                 <ExpandLessOutlined />
//               ) : (
//                 <ExpandMoreOutlined />
//               )
//             }
//           >
//             Student
//           </Button>
//           <Menu
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "left",
//             }}
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "left",
//             }}
//             anchorEl={anchorEl}
//             open={isStudentMenuOpen}
//             onClose={handleStudentMenuClose}
//           >
//             <MenuItem
//               component={Link}
//               to="/student/add"
//               onClick={handleStudentMenuClose}
//             >
//               Add
//             </MenuItem>
//             <MenuItem
//               component={Link}
//               to="/student"
//               onClick={handleStudentMenuClose}
//             >
//               Delete
//             </MenuItem>
//             <MenuItem
//               component={Link}
//               to="/student"
//               onClick={handleStudentMenuClose}
//             >
//               Update
//             </MenuItem>
//             <MenuItem
//               component={Link}
//               to="/student"
//               onClick={handleStudentMenuClose}
//             >
//               View
//             </MenuItem>
//           </Menu>
//           <Button
//             sx={{ color: "white", mr: 2 }}
//             onClick={handleTeacherMenuOpen}
//             endIcon={
//               isTeacherMenuOpen ? (
//                 <ExpandLessOutlined />
//               ) : (
//                 <ExpandMoreOutlined />
//               )
//             }
//           >
//             Teacher
//           </Button>
//           <Menu
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "left",
//             }}
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "left",
//             }}
//             anchorEl={anchorEl}
//             open={isTeacherMenuOpen}
//             onClose={handleTeacherMenuClose}
//           >
//             <MenuItem
//               component={Link}
//               to="/teacher/add"
//               onClick={handleTeacherMenuClose}
//             >
//               Add
//             </MenuItem>
//             <MenuItem
//               component={Link}
//               to="/teacher"
//               onClick={handleTeacherMenuClose}
//             >
//               Delete
//             </MenuItem>
//             <MenuItem
//               component={Link}
//               to="/teacher"
//               onClick={handleTeacherMenuClose}
//             >
//               Update
//             </MenuItem>
//             <MenuItem
//               component={Link}
//               to="/teacher"
//               onClick={handleTeacherMenuClose}
//             >
//               View
//             </MenuItem>
//           </Menu>
//           <Button
//             sx={{ color: "white", mr: 2 }}
//             onClick={handleCourseDesignerMenuOpen}
//             endIcon={
//               isCourseDesignerMenuOpen ? (
//                 <ExpandLessOutlined />
//               ) : (
//                 <ExpandMoreOutlined />
//               )
//             }
//           >
//             Course Designer
//           </Button>
//           <Menu
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "left",
//             }}
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "left",
//             }}
//             anchorEl={anchorEl}
//             open={isCourseDesignerMenuOpen}
//             onClose={handleCourseDesignerMenuClose}
//           >
//             <MenuItem
//               component={Link}
//               to="/course-designer/add"
//               onClick={handleCourseDesignerMenuClose}
//             >
//               Add
//             </MenuItem>
//             <MenuItem
//               component={Link}
//               to="/course-designer"
//               onClick={handleCourseDesignerMenuClose}
//             >
//               Delete
//             </MenuItem>
//             <MenuItem
//               component={Link}
//               to="/course-designer"
//               onClick={handleCourseDesignerMenuClose}
//             >
//               Update
//             </MenuItem>
//             <MenuItem
//               component={Link}
//               to="/course-designer"
//               onClick={handleCourseDesignerMenuClose}
//             >
//               View
//             </MenuItem>
//           </Menu>
//           <IconButton
//             sx={{ color: "white" }}
//             onClick={handleProfileMenuOpen}
//             edge="end"
//           >
//             <AccountCircleOutlined />
//           </IconButton>
//         </Toolbar>
//       </TopNavBarContainer>
//       <Menu
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleProfileMenuClose}
//       >
//         <MenuItem component={Link} to="/profile" onClick={handleProfileMenuClose}>
//           Profile
//         </MenuItem>
//         <MenuItem onClick={handleLogout}>
//           <ExitToAppOutlined sx={{ mr: 1 }} />
//           Logout
//         </MenuItem>
//       </Menu>
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  AccountCircleOutlined,
  ExpandMoreOutlined,
  ExpandLessOutlined,
  ExitToAppOutlined,
} from "@mui/icons-material";

const TopNavBarContainer = styled(AppBar)({
  backgroundColor: "#1e3f66",
  color: "white",
});

const TopNavBar = () => {
  const [anchorElStudent, setAnchorElStudent] = useState(null);
  const [anchorElTeacher, setAnchorElTeacher] = useState(null);
  const [anchorElCourseDesigner, setAnchorElCourseDesigner] = useState(null);
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const navigate = useNavigate();

  const handleStudentMenuOpen = (event) => {
    setAnchorElStudent(event.currentTarget);
  };

  const handleStudentMenuClose = () => {
    setAnchorElStudent(null);
  };

  const handleTeacherMenuOpen = (event) => {
    setAnchorElTeacher(event.currentTarget);
  };

  const handleTeacherMenuClose = () => {
    setAnchorElTeacher(null);
  };

  const handleCourseDesignerMenuOpen = (event) => {
    setAnchorElCourseDesigner(event.currentTarget);
  };

  const handleCourseDesignerMenuClose = () => {
    setAnchorElCourseDesigner(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorElProfile(null);
  };

  const handleLogout = () => {
    // Add your logout logic here
    // For example, clear local storage, redirect to login page, etc.
    navigate("/");
    localStorage.removeItem('token');
    
    console.log("Logout");
  };

  return (
    <>
      <TopNavBarContainer position="static">
        <Toolbar>
        <Typography variant="h1" component={Link} to="/" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'white', fontSize: '1.2rem', textDecoration: 'none' }}>
                   LMS
           </Typography>


          <Button component={Link} to="/home" sx={{ color: "white", mr: 2 }}>
            Home
          </Button>
          <Button
            sx={{ color: "white", mr: 2 }}
            onClick={handleStudentMenuOpen}
            endIcon={
              anchorElStudent ? (
                <ExpandLessOutlined />
              ) : (
                <ExpandMoreOutlined />
              )
            }
          >
            Student
          </Button>
          <Menu
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            anchorEl={anchorElStudent}
            open={Boolean(anchorElStudent)}
            onClose={handleStudentMenuClose}
          >
            <MenuItem
              component={Link}
              to="/student/add"
              onClick={handleStudentMenuClose}
            >
              Add
            </MenuItem>
            <MenuItem
              component={Link}
              to="/student"
              onClick={handleStudentMenuClose}
            >
              Delete
            </MenuItem>
            <MenuItem
              component={Link}
              to="/student"
              onClick={handleStudentMenuClose}
            >
              Update
            </MenuItem>
            <MenuItem
              component={Link}
              to="/student"
              onClick={handleStudentMenuClose}
            >
              View
            </MenuItem>
          </Menu>
          <Button
            sx={{ color: "white", mr: 2 }}
            onClick={handleTeacherMenuOpen}
            endIcon={
              anchorElTeacher ? (
                <ExpandLessOutlined />
              ) : (
                <ExpandMoreOutlined />
              )
            }
          >
            Teacher
          </Button>
          <Menu
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            anchorEl={anchorElTeacher}
            open={Boolean(anchorElTeacher)}
            onClose={handleTeacherMenuClose}
          >
            <MenuItem
              component={Link}
              to="/teacher/add"
              onClick={handleTeacherMenuClose}
            >
              Add
            </MenuItem>
            <MenuItem
              component={Link}
              to="/teacher"
              onClick={handleTeacherMenuClose}
            >
              Delete
            </MenuItem>
            <MenuItem
              component={Link}
              to="/teacher"
              onClick={handleTeacherMenuClose}
            >
              Update
            </MenuItem>
            <MenuItem
              component={Link}
              to="/teacher"
              onClick={handleTeacherMenuClose}
            >
              View
            </MenuItem>
          </Menu>
          <Button
            sx={{ color: "white", mr: 2 }}
            onClick={handleCourseDesignerMenuOpen}
            endIcon={
              anchorElCourseDesigner ? (
                <ExpandLessOutlined />
              ) : (
                <ExpandMoreOutlined />
              )
            }
          >
            Course Designer
          </Button>
          <Menu
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            anchorEl={anchorElCourseDesigner}
            open={Boolean(anchorElCourseDesigner)}
            onClose={handleCourseDesignerMenuClose}
          >
            <MenuItem
              component={Link}
              to="/CourseDesigner/add"
              onClick={handleCourseDesignerMenuClose}
            >
              Add
            </MenuItem>
            <MenuItem
              component={Link}
              to="/CourseDesigner"
              onClick={handleCourseDesignerMenuClose}
            >
              Delete
            </MenuItem>
            <MenuItem
              component={Link}
              to="/CourseDesigner"
              onClick={handleCourseDesignerMenuClose}
            >
              Update
            </MenuItem>
            <MenuItem
              component={Link}
              to="/CourseDesigner"
              onClick={handleCourseDesignerMenuClose}
            >
              View
            </MenuItem>
          </Menu>
          <IconButton
            sx={{ color: "white" }}
            onClick={handleProfileMenuOpen}
            edge="end"
          >
            <AccountCircleOutlined />
          </IconButton>
        </Toolbar>
      </TopNavBarContainer>
      <Menu
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorElProfile}
        open={Boolean(anchorElProfile)}
        onClose={handleProfileMenuClose}
      >
        <MenuItem component={Link} to="/home" onClick={handleProfileMenuClose}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ExitToAppOutlined sx={{ mr: 1 }} />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default TopNavBar;
