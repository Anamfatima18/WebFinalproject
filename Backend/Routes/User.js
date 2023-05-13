const express = require("express");
const router = express.Router();
const { registerAdmin, loginAdmin , viewAllAdmins , deleteAdmin , updateAdmin }= require("../Controllers/AdminController");
 const { registerStudent , loginStudent , deleteStudent , viewAllStudents}= require("../Controllers/StudentController");
 const {registerTeacher  , loginTeacher, viewAllTeacher, deleteTeacher}= require("../Controllers/TeacherController");

router.post("/registerAdmin", registerAdmin);
router.post("/loginAdmin", loginAdmin);
router.get("/viewAlladmin" , viewAllAdmins);
router.post("/deleteAdmin" , deleteAdmin);
router.post("/updatedmin" , updateAdmin);

router.post("/registerStudent", registerStudent);
router.post("/loginStudent", loginStudent);
router.post("/deleteStudent" , deleteStudent);
router.get("/viewAllStudents" , viewAllStudents);

router.post("/registerteacher", registerTeacher);
router.post("/loginTeacher", loginTeacher);
router.get("/viewAllTeachers" , viewAllTeacher);
router.post("/deleteTeacher" , deleteTeacher);

module.exports = router;
