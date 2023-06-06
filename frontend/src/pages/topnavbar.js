import React, { useState } from "react";
import { Link } from "react-router-dom";
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
} from "@mui/icons-material";

const TopNavBarContainer = styled(AppBar)({
  backgroundColor: "#1e3f66",
  color: "white",
});

const TopNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [isStudentMenuOpen, setIsStudentMenuOpen] = useState(false);
  const [isTeacherMenuOpen, setIsTeacherMenuOpen] = useState(false);
  const [isCourseDesignerMenuOpen, setIsCourseDesignerMenuOpen] = useState(false);

  const handleStudentMenuOpen = (event) => {
    setIsStudentMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleStudentMenuClose = () => {
    setIsStudentMenuOpen(false);
  };

  const handleTeacherMenuOpen = (event) => {
    setIsTeacherMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleTeacherMenuClose = () => {
    setIsTeacherMenuOpen(false);
  };

  const handleCourseDesignerMenuOpen = (event) => {
    setIsCourseDesignerMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleCourseDesignerMenuClose = () => {
    setIsCourseDesignerMenuOpen(false);
  };

  return (
    <>
      <TopNavBarContainer position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1 }}>
            LMS
          </Typography>
          <Button component={Link} to="/home" sx={{ color: "white", mr: 2 }}>
            Home
          </Button>
          <Button
            sx={{ color: "white", mr: 2 }}
            onClick={handleStudentMenuOpen}
            endIcon={
              isStudentMenuOpen ? (
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
            anchorEl={anchorEl}
            open={isStudentMenuOpen}
            onClose={handleStudentMenuClose}
          >
            <MenuItem component={Link} to="/student/add" onClick={handleStudentMenuClose}>
              Add
            </MenuItem>
            <MenuItem component={Link} to="/student" onClick={handleStudentMenuClose}>
              Delete
            </MenuItem>
            <MenuItem component={Link} to="/student" onClick={handleStudentMenuClose}>
              Update
            </MenuItem>
            <MenuItem component={Link} to="/student" onClick={handleStudentMenuClose}>
              View
            </MenuItem>
          </Menu>
          <Button
            sx={{ color: "white", mr: 2 }}
            onClick={handleTeacherMenuOpen}
            endIcon={
              isTeacherMenuOpen ? (
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
            anchorEl={anchorEl}
            open={isTeacherMenuOpen}
            onClose={handleTeacherMenuClose}
          >
            <MenuItem component={Link} to="/teacher/add" onClick={handleTeacherMenuClose}>
              Add
            </MenuItem>
            <MenuItem component={Link} to="/teacher" onClick={handleTeacherMenuClose}>
              Delete
            </MenuItem>
            <MenuItem component={Link} to="/teacher" onClick={handleTeacherMenuClose}>
              Update
            </MenuItem>
            <MenuItem component={Link} to="/teacher" onClick={handleTeacherMenuClose}>
              View
            </MenuItem>
          </Menu>
          <Button
            sx={{ color: "white", mr: 2 }}
            onClick={handleCourseDesignerMenuOpen}
            endIcon={
              isCourseDesignerMenuOpen ? (
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
            anchorEl={anchorEl}
            open={isCourseDesignerMenuOpen}
            onClose={handleCourseDesignerMenuClose}
          >
            <MenuItem
              component={Link}
              to="/course-designer/add"
              onClick={handleCourseDesignerMenuClose}
            >
              Add
            </MenuItem>
            <MenuItem
              component={Link}
              to="/course-designer/delete"
              onClick={handleCourseDesignerMenuClose}
            >
              Delete
            </MenuItem>
            <MenuItem
              component={Link}
              to="/course-designer/update"
              onClick={handleCourseDesignerMenuClose}
            >
              Update
            </MenuItem>
            <MenuItem
              component={Link}
              to="/course-designer/view"
              onClick={handleCourseDesignerMenuClose}
            >
              View
            </MenuItem>
          </Menu>
          <IconButton color="inherit">
            <AccountCircleOutlined />
          </IconButton>
        </Toolbar>
      </TopNavBarContainer>
    </>
  );
};

export default TopNavBar;
