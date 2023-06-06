
import bcrypt from "bcryptjs";
//import jwt from "jsonwebtoken";
import { Student } from "../Models/Student.js";


// export const registerStudent = async (req, res) => {
//     try {
//       const { name, email, password, batch, phone } = req.body;
//       const studentExists = await Student.findOne({ email });
  
//       if (studentExists) {
//         return res.status(400).send({ error: "Student with this email already exists" });
//       }
  
//       // const lastStudent = await Student.findOne({ batch }).sort({ field: 'asc', _id: -1 });
//       // const lastStudentId = lastStudent?.StudentId ? parseInt(lastStudent.StudentId.slice(3)) : 0;
//       // const newStudentId = `${batch}S${(lastStudentId + 1).toString().padStart(4, '0')}`;
// //       const lastStudent = await Student.findOne({ batch }).sort({ field: 'asc', _id: -1 });
// // const lastStudentId = lastStudent?.StudentId ? parseInt(lastStudent.StudentId.slice(3)) : 0;
// // const newStudentId = `Batch${batch.toString().padStart(4, '0')}S${(lastStudentId + 1).toString().padStart(4, '0')}`;
// // const lastStudent = await Student.findOne({}, {}, { sort: { StudentId: -1 } });
// // const lastStudentId = lastStudent ? parseInt(lastStudent.StudentId.slice(-4), 10) : 0;
// // const newStudentId = `Batch${batch.toString().padStart(4, '0')}S${(lastStudentId + 1).toString().padStart(4, '0')}`;

// //const batchNumber = 14; // Replace with the user input for the batch number
// const lastStudent = await Student.findOne({}, {}, { sort: { 'StudentId': -1 } });
// let newStudentId;

// if (lastStudent) {
//   const lastStudentId = lastStudent.StudentId;
//   const lastStudentIdNumber = parseInt(lastStudentId.slice(3), 10);
//   const newStudentIdNumber = lastStudentIdNumber + 1;
//   newStudentId = `${batch.toString().padStart(2, '0')}S${newStudentIdNumber.toString().padStart(4, '0')}`;
// } else {
//   newStudentId = `${batch.toString().padStart(2, '0')}S0001`; // Default ID for the first student in the specified batch
// }

// console.log(newStudentId);



      

//       // const lastCourseDesigner = await CourseDesigner.findOne().sort({ field: 'asc', _id: -1 });
//       // const lastCourseDesignerId = lastCourseDesigner?.CourseDesignerId ? parseInt(lastCourseDesigner.CourseDesignerId.slice(2)) : 0;
//       // const newCourseDesignerId = `cd${(lastCourseDesignerId + 1).toString().padStart(4, '0')}`;

      
//       const hashedPassword = await bcrypt.hash(password, 8);
//       const student = new Student({
//         name,
//         email,
//         password: hashedPassword,
//         batch,
//         phone,
//         StudentId: newStudentId,
//       });
      
//       await student.save();
  
//       res.status(201).json({ message: "Student added successfully" });
//     } catch (e) {
//       res.status(500).send(e);
//     }
//   };
export const registerStudent = async (req, res) => {
  try {
    const { name, email, password, batch, phone } = req.body;
    const studentExists = await Student.findOne({ email });

    if (studentExists) {
      return res.status(400).send({ error: "Student with this email already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // const lastStudent = await Student.findOne({ StudentId: { $ne: null } }, {}, { sort: { StudentId: -1 } });
     let newStudentId;
    const lastStudent = await Student.findOne({}, {}, { sort: { _id: -1 } });
    console.log(lastStudent); // Add this line
    
    
    // Rest of the code...
      
    if (lastStudent) {
      const lastStudentId = lastStudent.StudentId;
      console.log(lastStudentId)
      const lastBatchNumber = parseInt(lastStudentId.slice(0, 2), 10);
      const lastStudentIdNumber = parseInt(lastStudentId.slice(5), 10);
      const newStudentIdNumber = lastStudentIdNumber + 1;
      newStudentId = `${batch.toString().padStart(2, '0')}S${newStudentIdNumber.toString().padStart(4, '0')}`;
    } else {
      newStudentId = `${batch.toString().padStart(2, '0')}S0001`; // Default ID for the first student in the specified batch
    }

    console.log(newStudentId);

    const student = new Student({
      name,
      email,
      password: hashedPassword,
      batch,
      phone,
      StudentId: newStudentId,
    });

    const existingStudent = await Student.findOne({ StudentId: newStudentId });
    if (existingStudent) {
      return res.status(400).send({ error: "Student with this Student ID already exists" });
    }

    await student.save();

    res.status(201).json({ message: "Student added successfully" });
  } catch (error) {
    console.log('Error:', error);
    res.status(500).send(error);
  }
};


// export const registerStudent = async (req, res) => {
//   try {
//     const { name, email, password, phone } = req.body;
//     const studentExists = await Student.findOne({ email });

//     if (studentExists) {
//       return res.status(400).send({ error: "Student with this email already exists" });
//     }

//     const lastStudent = await Student.findOne().sort({ _id: -1 });
//     const lastStudentId = lastStudent ? parseInt(lastStudent.StudentId.slice(1)) : 0;
//     const newStudentId = `S${(lastStudentId + 1).toString().padStart(4, '0')}`;

//     const hashedPassword = await bcrypt.hash(password, 8);
//     const student = new Student({
//       name,
//       email,
//       password: hashedPassword,
//       phone,
//       StudentId: newStudentId,
//     });

//     await student.save();

//     res.status(201).json({ message: "Student added successfully" });
//   } catch (e) {
//     res.status(500).send(e);
//   }
// };


  
  

// Delete Admin function
export const deleteStudent = async (req, res) => {
    try {
      const { StudentId } = req.params;
      const foundStudent = await Student.findOne({ StudentId });
      
      if (!foundStudent) {
        return res.status(404).json({ message: "Student not found" });
      }
      
      const deletedStudent = await Student.findByIdAndDelete(foundStudent._id);
      
      res.status(200).json({ message: "Student deleted successfully" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error deleting Student" });
    }
  };
  

// View All Admin function

export const viewAllStudents = async (req, res) => {
    try {
      const allStudents = await Student.find({}, { password: 0 }); // Excludes the password field from the query result
  
      if (!allStudents || allStudents.length === 0) {
        return res.status(404).json({ message: "No students found" });
      }
  
      const studentDetails = allStudents.map((student) => {
        const { name, email, phone, _id ,StudentId, batch } = student;
        return { _id, name, email, phone, StudentId, batch };
      });
  
      res.status(200).json(studentDetails);
    } catch (e) {
      res.status(500).send(e);
    }
  };
  
  export const viewStudentById = async (req, res) => {
    try {
      const { StudentId } = req.params;
      
      const student = await Student.findOne({ StudentId}); // Excludes the password field from the query result
      
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      
      const { name, email, phone, _id,  batch } = student;
      const studentDetails = { _id, name, email, phone, StudentId, batch };
      
      res.status(200).json(studentDetails);
    } catch (e) {
      res.status(500).send(e);
    }
  };
  
  
  
  // const forgotPasswordStudent = async (req, res) => {
  //   try {
  //     const { email } = req.body;
  //     const student = await Student.findOne({ email });
  
  //     if (!student) {
  //       return res.status(400).json({ error: "Student not found" });
  //     }
  
  //     const token = jwt.sign({ _id: student._id }, process.env.RESET_PASSWORD_KEY, {
  //       expiresIn: "20m",
  //     });
  
  //     const mailData = {
  //       to: email,
  //       from: process.env.EMAIL_FROM,
  //       subject: "Password Reset Link",
  //       html: `
  //         <h1>Please click on the given link to reset your password</h1>
  //         <p>${process.env.CLIENT_URL}/reset-password/${token}</p>
  //       `,
  //     };
  
  //     sgMail.send(mailData);
  
  //     return res.json({ message: "Email has been sent, kindly follow the instructions" });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send("Server error");
  //   }
  // };
  // export const getStudent=async (req , res)=>{
  //   const{studentId} = req.params;
  //   const foundStudent = await Student.findOne({ StudentId });
      
  //     if (!foundStudent) {
  //       return res.status(404).json({ message: "Student not found" });
  //     }
  // }
  export const updateStudent = async (req, res) => {
    const { StudentId } = req.params;
  
    try {
      const student = await Student.findOneAndUpdate(
        { StudentId },
        req.body,
        { new: true }
      );
  
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
  
      return res.status(200).json({
        message: 'Student updated successfully',
        student,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error updating student' });
    }
  };
  
  // module.exports = {
  //   registerStudent,
  //   loginStudent,
  //   deleteStudent,
  //   viewAllStudents,
  //   updateStudent
  // };
  // export = {
  //   registerStudent,
  //   loginStudent,
  //   deleteStudent,
  //   viewAllStudents,
  //   updateStudent
  // };
  