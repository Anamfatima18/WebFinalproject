import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//import { Teacher } from "../Models/User.js";
//import { Student } from "../Models/User.js";
import { Teacher } from '../Models/Teacher.js';


export const registerTeacher = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        const teacherExists = await Teacher.findOne({ email });
    
        if (teacherExists) {
            return res.status(400).send({ error: "Teacher with this email already exists" });
        }

        // const lastTeacher = await Teacher.findOne({}, {}, { sort: { 'createdAt' : -1 } }); // Get the most recently added teacher
        // const lastTeacherId = lastTeacher ? parseInt(lastTeacher.TeacherId.substring(1)) : 0; // Extract the teacher ID from the most recently added teacher
        // const newTeacherId = "T" + (lastTeacherId + 1).toString().padStart(4, "0"); // Generate the new teacher ID
            // console.log(lastTeacher);
            // console.log(lastTeacherId);
            // console.log(newTeacherId);
              //  const lastTeacher = await Teacher.findOne({}, {}, { sort: { 'createdAt': -1 } });
              //   const lastTeacherId = lastTeacher ? parseInt(lastTeacher.TeacherId.slice(1), 10) : 0;
              //   const newTeacherId = 'T' + (lastTeacherId + 1).toString().padStart(4, '0');
              const lastTeacher = await Teacher.findOne({}, {}, { sort: { 'TeacherId': -1 } });
              let newTeacherId;
              
              if (lastTeacher) {
                const lastTeacherId = lastTeacher.TeacherId;
                const lastTeacherIdNumber = parseInt(lastTeacherId.slice(1), 10);
                const newTeacherIdNumber = lastTeacherIdNumber + 1;
                newTeacherId = 'T' + newTeacherIdNumber.toString().padStart(4, '0');
              } else {
                newTeacherId = 'T0001'; // Default ID for the first teacher
              }
              
              console.log(newTeacherId);
              
              
console.log(newTeacherId);

       const hashedPassword = await bcrypt.hash(password, 8);
        const teacher = new Teacher({
            name,
            email,
            password: hashedPassword,
            phone,
            TeacherId: newTeacherId // Save the new teacher ID to the database
        });
        await teacher.save();
    
        res.status(201).json({ message: "Teacher added successfully" });
    } catch (e) {
        res.status(500).send(e);
    }
};

  export const loginTeacher = async (req, res) => {
    try {
        const { email, password} = req.body;

        let user;
        
            user = await Teacher.findOne({ email });
        

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign({ _id: user._id }, "secret");

        res.json({ user, token });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
};


export const viewAllTeacher = async (req, res) => {
    try {
      const allTeacher = await Teacher.find({}, { password: 0 }); // Excludes the password field from the query result
  
      if (!allTeacher || allTeacher.length === 0) {
        return res.status(404).json({ message: "No Teacher found" });
      }
  
      const TeacherDetails = allTeacher.map((Teacher) => {
        const { name, email, phone, _id ,TeacherId} = Teacher;
        return { _id, name, email, phone, TeacherId};
      });
  
      res.status(200).json(TeacherDetails);
    } catch (e) {
      res.status(500).send(e);
    }
  };
  
  export const deleteTeacher = async (req, res) => {
    try {
      const { TeacherId } = req.body;
      const foundTeacher = await Teacher.findOne({ TeacherId });
      
      if (!foundTeacher) {
        return res.status(404).json({ message: "Teacher not found" });
      }
      
      const deletedTeacher = await Teacher.findByIdAndDelete(foundTeacher._id);
      
      res.status(200).json({ message: "Teacher deleted successfully" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error deleting Teacher" });
    }
  };
  export const updateTeacher = async (req, res) => {
    const { TeacherId } = req.params;
  
    try {
      const teacher = await Teacher.findOneAndUpdate(
        { TeacherId },
        req.body,
        { new: true }
      );
  
      if (!teacher) {
        return res.status(404).json({ error: 'Teacher not found' });
      }
  
      return res.status(200).json({
        message: 'Teacher updated successfully',
        teacher,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error updating teacher' });
    }
  };
  
  // export = {
  //   registerTeacher,
  //   loginTeacher,
  //   viewAllTeacher,
  //   deleteTeacher,
  //   updateTeacher,
  // };
  