// import React from 'react';
// // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// //import Home from './Components/Home';
// //import Student from './Components/Student';
// import Student from './pages/student';


// const App = () => {
//   return (
//     <Student/>
//     // <BrowserRouter>
//     //   <Routes>
//     //     {/* <Route path="/" element={<Home />} /> */}
//     //     <Route path="/student" element={<Student />} />
//     //   </Routes>
//     // </BrowserRouter>
//   );
// };

// export default App; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import StudentView from './pages/student';
import AddStudent from './pages/AddStudent';
// import SideNavBar from './pages/navbar';
import UpdateStudent from './pages/UpdateStudent';
import HomePage from './pages/homepage';
import TeacherView from './pages/teacher';
import UpdateTeacher from './pages/updateteacher';
import AddTeacher from './pages/Addteacher';
const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/student" element={<StudentView />} />
        <Route path="/teacher" element={<TeacherView />} />
        <Route path="/student/add" element={<AddStudent />} />
        <Route path="/teacher/add" element={<AddTeacher />} />
        <Route path="/student/update/:id" element={<UpdateStudent/>} />
        <Route path="/teacher/update/:id" element={<UpdateTeacher/>} />
        
      </Routes>
      
    </Router>
  );
};

export default App;
