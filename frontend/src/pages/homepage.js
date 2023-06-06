// import React, { useState, useEffect } from "react";
// import SideNavBar from "./navbar";
// import { Box } from "@mui/system";
// import { Avatar, Typography } from "@mui/material";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

// const HomePage = () => {
//   const [profileData, setProfileData] = useState(null);

//   useEffect(() => {
//     // Fetch admin profile data from local storage
//     const storedProfileData = {
//       name: localStorage.getItem("name"),
//       email: localStorage.getItem("email"),
//       adminId: localStorage.getItem("id"),
//       phone: localStorage.getItem("phone"),
//     };

//     // Set the profile data in the state
//     setProfileData(storedProfileData);
//   }, []);

//   return (
//     <div>
//       <SideNavBar />
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         marginTop="40px"
//       >
//         <Avatar
//           sx={{ width: "120px", height: "120px", marginBottom: "16px"  ,marginLeft:'50px'}}
//         >
//           <AccountCircleOutlinedIcon fontSize="large" />
//         </Avatar>
//         <Typography variant="h5" marginBottom="8px">
//           Admin Profile
//         </Typography>
//         {profileData && (
//           <>
//             <Typography variant="body1">Name: {profileData.name}</Typography>
//             <Typography variant="body1">Email: {profileData.email}</Typography>
//             <Typography variant="body1">Admin ID: {profileData.adminId}</Typography>
//             <Typography variant="body1">Phone: {profileData.phone}</Typography>
//           </>
//         )}
//       </Box>
//     </div>
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from "react";
import SideNavBar from "./navbar";
import { Box, Typography } from "@mui/material";
import TopNavBar from "./topnavbar";

const HomePage = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch admin profile data from local storage
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedAdminId = localStorage.getItem("id");
    const storedPhone = localStorage.getItem("phone");

    // Set the profile data
    if (storedName && storedEmail && storedAdminId && storedPhone) {
      setProfileData({
        name: storedName,
        email: storedEmail,
        adminId: storedAdminId,
        phone: storedPhone,
      });
    }
  }, []);

  return (
    <div>
      <TopNavBar/>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop="40px"
      >
        <Typography variant="h5" marginBottom="8px">
          Admin Profile
        </Typography>
        {profileData ? (
          <>
            <Typography variant="body1">Name: {profileData.name}</Typography>
            <Typography variant="body1">Email: {profileData.email}</Typography>
            <Typography variant="body1">
              Admin ID: {profileData.adminId}
            </Typography>
            <Typography variant="body1">Phone: {profileData.phone}</Typography>
          </>
        ) : (
          <Typography variant="body1">Profile data not available</Typography>
        )}
      </Box>
    </div>
  );
};

export default HomePage;
