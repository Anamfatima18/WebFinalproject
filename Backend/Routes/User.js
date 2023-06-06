// import express from "express";
// const router = express.Router();
// const { registerAdmin , loginAdmin, deleteAdmin , viewAllAdmins }= require("../Controllers/AdminController");
//  const { registerStudent ,  deleteStudent , viewAllStudents  , updateStudent}= require("../Controllers/StudentController");
//  const {registerTeacher  ,  viewAllTeacher, deleteTeacher , updateTeacher}= require("../Controllers/TeacherController");
// const {RegisterCourseDesigner , viewAllDesigners , deleteCourseDesigner , updateCourseDesigner} = require("../Controllers/CourseDesignerController")
// //import {authorize} from "../middlewares/auth.js";
// const {authorize} = require ("../Middleware/auth")


// router.post("/registerCourseDesigner" , authorize ,RegisterCourseDesigner)
// router.get("/viewallDesigners" , authorize , viewAllDesigners)
// router.post("/deleteCourseDesigner" , authorize,deleteCourseDesigner)
// router.put("/course-designer/:CourseDesignerId",   authorize ,updateCourseDesigner);


// router.post("/registerAdmin" , registerAdmin)
// router.post("/loginAdmin", loginAdmin);


// router.post("/registerStudent", authorize,  registerStudent);
// router.post("/deleteStudent" , authorize ,deleteStudent);
// router.get("/viewAllStudents" ,  authorize, viewAllStudents);
// router.put('/students/:StudentId',  authorize, updateStudent);

// //router.post("/forgot-password", forgotPasswordStudent);

// router.post("/registerteacher",  authorize, registerTeacher);
// router.get("/viewAllTeachers" ,  authorize, viewAllTeacher);
// router.post("/deleteTeacher" , authorize,  deleteTeacher);
// router.put('/teachers/:TeacherId',  authorize, updateTeacher);

// module.exports = router;


import express from "express";
import {registerAdmin,loginAdmin,deleteAdmin,viewAllAdmins} from "../Controllers/AdminController.js";
import {registerStudent,deleteStudent,viewAllStudents, updateStudent, viewStudentById} from "../Controllers/StudentController.js";
//import { registerTeacher } from "../Controllers/TeacherController.js";
import {registerTeacher,viewAllTeacher,deleteTeacher,updateTeacher} from "../Controllers/TeacherController.js";
import { RegisterCourseDesigner,viewAllDesigners,deleteCourseDesigner, updateCourseDesigner,} from "../Controllers/CourseDesignerController.js";
import { authorize } from "../Middleware/auth.js";
const router = express.Router();

router.post("/admin/register",  registerAdmin);
router.post("/admin/login",  loginAdmin);
router.delete("/admin/delete",  deleteAdmin);
router.get("/admin/viewAll",  viewAllAdmins);

router.post("/student/register", authorize, registerStudent);
router.delete("/student/delete/:StudentId", authorize, deleteStudent);
router.get("/student/viewAll", authorize, viewAllStudents);
router.get("/student/viewAll/:StudentId", authorize, viewStudentById);
// router.get("/student/view/:id" , authorize , viewStudentbyid)
router.put("/student/update/:StudentId", authorize, updateStudent);

router.post("/teacher/register", authorize, registerTeacher);
router.get("/teacher/viewAll", authorize, viewAllTeacher);
router.delete("/teacher/delete", authorize, deleteTeacher);
router.put("/teacher/update/:TeacherId", authorize, updateTeacher);

router.post("/courseDesigner/register", authorize, RegisterCourseDesigner);
router.get("/courseDesigner/viewAll", authorize, viewAllDesigners);
router.delete("/courseDesigner/delete", authorize, deleteCourseDesigner);
router.put("/courseDesigner/update/:CourseDesignerId", authorize, updateCourseDesigner);

export default router;