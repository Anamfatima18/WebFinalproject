





// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { styled } from "@mui/system";
// import {
//   Box,
//   Button,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   ListSubheader,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import {
//   HomeOutlined,
//   AccountCircleOutlined,
//   SchoolOutlined,
//   PeopleOutlined,
//   ExpandMoreOutlined,
//   ExpandLessOutlined,
//   AccountTreeOutlined,
// } from "@mui/icons-material";

// const SideNavBarContainer = styled(Box)({
//   backgroundColor: "#1e3f66",
//   color: "white",
//   width: "240px",
//   minHeight: "100vh",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
// });

// const SubMenuContainer = styled(Box)({
//   paddingLeft: "16px",
// });

// const AdminButton = styled(Button)({
//   color: "white",
//   marginBottom: "16px",
//   borderRadius: "0",
//   border: "2px solid white",
//   backgroundColor: "#1e3f66",
//   width: "100%",
//   paddingLeft: "16px",
//   paddingRight: "16px",
//   display: "flex",
//   justifyContent: "flex-start",
//   alignItems: "center",
//   boxSizing: "border-box",
//   "& .MuiButton-startIcon": {
//     marginRight: "8px",
//   },
// });

// const SideNavBar = () => {
//   const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

//   const handleProfileMenuOpen = () => {
//     setIsProfileMenuOpen(true);
//   };

//   const handleProfileMenuClose = () => {
//     setIsProfileMenuOpen(false);
//   };

//   return (
//     <SideNavBarContainer>
//       <List disablePadding>
//         <MenuItemWithSubItems text="Home" icon={<HomeOutlined />} link="" />
//         <MenuItemWithSubItems
//           text="Student"
//           icon={<SchoolOutlined />}
//           subItems={[
//             { text: "Add", link: "/student/add" },
//             { text: "Delete", link: "/student/delete" },
//             { text: "Update", link: "/student/update" },
//             { text: "View", link: "/student/view" },
//           ]}
//         />
//         <MenuItemWithSubItems
//           text="Teacher"
//           icon={<PeopleOutlined />}
//           subItems={[
//             { text: "Add", link: "/teacher/add" },
//             { text: "Delete", link: "/teacher/delete" },
//             { text: "Update", link: "/teacher/update" },
//             { text: "View", link: "/teacher/view" },
//           ]}
//         />
//         <MenuItemWithSubItems
//           text="Course Designer"
//           icon={<AccountTreeOutlined />}
//           subItems={[
//             { text: "Add", link: "/course-designer/add" },
//             { text: "Delete", link: "/course-designer/delete" },
//             { text: "Update", link: "/course-designer/update" },
//             { text: "View", link: "/course-designer/view" },
//           ]}
//         />
//       </List>
//       <ListSubheader>
//         <AdminButton
//           id="admin-button"
//           startIcon={<AccountCircleOutlined />}
//           onClick={handleProfileMenuOpen}
//           fullWidth
//         >
//           Admin
//         </AdminButton>
//         <Menu
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "left",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "left",
//           }}
//           anchorEl={isProfileMenuOpen ? document.getElementById("admin-button") : null}
//           open={isProfileMenuOpen}
//           onClose={handleProfileMenuClose}
//         >
//           <MenuItem component={Link} to="/profile" onClick={handleProfileMenuClose}>
//             Profile
//           </MenuItem>
//           <MenuItem component={Link} to="/logout" onClick={handleProfileMenuClose}>
//             Logout
//           </MenuItem>
//         </Menu>
//       </ListSubheader>
//     </SideNavBarContainer>
//   );
// };

// const MenuItemWithSubItems = ({ text, icon, link, subItems }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleSubItems = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div>
//       <ListItemButton
//         onClick={toggleSubItems}
//         sx={{ justifyContent: "flex-start" }}
//         component={Link}
//         to={link}
//       >
//         <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
//         <ListItemText primary={text} />
//         {subItems && (isExpanded ? <ExpandLessOutlined /> : <ExpandMoreOutlined />)}
//       </ListItemButton>
//       {isExpanded && (
//         <SubMenuContainer>
//           {subItems.map(({ text, link }) => (
//             <Button key={text} component={Link} to={link} fullWidth sx={{ color: "white" }}>
//               {text}
//             </Button>
//           ))}
//         </SubMenuContainer>
//       )}
//     </div>
//   );
// };

// export default SideNavBar;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  HomeOutlined,
  AccountCircleOutlined,
  SchoolOutlined,
  PeopleOutlined,
  ExpandMoreOutlined,
  ExpandLessOutlined,
  AccountTreeOutlined,
} from "@mui/icons-material";

const SideNavBarContainer = styled(Box)({
  backgroundColor: "#1e3f66",
  color: "white",
  width: "240px",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const SubMenuContainer = styled(Box)({
  paddingLeft: "16px",
});

const AdminButton = styled(Button)({
  color: "white",
  marginBottom: "16px",
  borderRadius: "0",
  border: "2px solid white",
  backgroundColor: "#1e3f66",
  width: "100%",
  paddingLeft: "16px",
  paddingRight: "16px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  boxSizing: "border-box",
  "& .MuiButton-startIcon": {
    marginRight: "8px",
  },
});

const SideNavBar = ({ profileData }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleProfileMenuOpen = () => {
    setIsProfileMenuOpen(true);
  };

  const handleProfileMenuClose = () => {
    setIsProfileMenuOpen(false);
  };

  return (
    <SideNavBarContainer>
      <List disablePadding>
        <MenuItemWithSubItems text="Home" icon={<HomeOutlined />} link="/home" />
        <MenuItemWithSubItems
          text="Student"
          icon={<SchoolOutlined />}
          subItems={[
            { text: "Add", link: "/student/add" },
            { text: "Delete", link: "/student" },
            { text: "Update", link: "/student/update/:id" },
            { text: "View", link: "/student" },
          ]}
        />
        <MenuItemWithSubItems
          text="Teacher"
          icon={<PeopleOutlined />}
          subItems={[
            { text: "Add", link: "/teacher/add" },
            { text: "Delete", link: "/teacher/delete" },
            { text: "Update", link: "/teacher/update" },
            { text: "View", link: "/teacher/view" },
          ]}
        />
        <MenuItemWithSubItems
          text="Course Designer"
          icon={<AccountTreeOutlined />}
          subItems={[
            { text: "Add", link: "/course-designer/add" },
            { text: "Delete", link: "/course-designer/delete" },
            { text: "Update", link: "/course-designer/update" },
            { text: "View", link: "/course-designer/view" },
          ]}
        />
      </List>
      <ListSubheader>
        <AdminButton
          id="admin-button"
          startIcon={<AccountCircleOutlined />}
          onClick={handleProfileMenuOpen}
          fullWidth
        >
          Admin
        </AdminButton>
        <Menu
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          anchorEl={isProfileMenuOpen ? document.getElementById("admin-button") : null}
          open={isProfileMenuOpen}
          onClose={handleProfileMenuClose}
        >
          <MenuItem component={Link} to="/profile" onClick={handleProfileMenuClose}>
            Profile
          </MenuItem>
          <MenuItem component={Link} to="/logout" onClick={handleProfileMenuClose}>
            Logout
          </MenuItem>
        </Menu>
      </ListSubheader>
    </SideNavBarContainer>
  );
};

const MenuItemWithSubItems = ({ text, icon, link, subItems }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSubItems = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <ListItemButton
        onClick={toggleSubItems}
        sx={{ justifyContent: "flex-start" }}
        component={Link}
        to={link}
      >
        <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {subItems && (isExpanded ? <ExpandLessOutlined /> : <ExpandMoreOutlined />)}
      </ListItemButton>
      {isExpanded && (
        <SubMenuContainer>
          {subItems.map(({ text, link }) => (
            <Button key={text} component={Link} to={link} fullWidth sx={{ color: "white" }}>
              {text}
            </Button>
          ))}
        </SubMenuContainer>
      )}
    </div>
  );
};

export default SideNavBar;
