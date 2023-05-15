
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Student } from "../Models/User.js";


export const registerStudent = async (req, res) => {
    try {
      const { name, email, password, batch, phone } = req.body;
      const studentExists = await Student.findOne({ email });
  
      if (studentExists) {
        return res.status(400).send({ error: "Student with this email already exists" });
      }
  
      const lastStudent = await Student.findOne({ batch }).sort({ field: 'asc', _id: -1 });
      const lastStudentId = lastStudent?.studentId ? parseInt(lastStudent.studentId.slice(3)) : 0;
      const newStudentId = `${batch}S${(lastStudentId + 1).toString().padStart(4, '0')}`;
  
      const hashedPassword = await bcrypt.hash(password, 8);
      const student = new Student({
        name,
        email,
        password: hashedPassword,
        batch,
        phone,
        StudentId: newStudentId,
      });
      await student.save();
  
      res.status(201).json({ message: "Student added successfully" });
    } catch (e) {
      res.status(500).send(e);
    }
  };
  
  export const loginStudent = async (req, res) => {
    try {
        const { email, password} = req.body;

        let user;
        
            user = await Student.findOne({ email });
        

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign({ _id: user._id }, "Secret");

        res.json({ user, token });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
};

// Delete Admin function
export const deleteStudent = async (req, res) => {
    try {
      const { StudentId } = req.body;
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
  