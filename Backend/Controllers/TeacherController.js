const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {  Teacher } = require("../Models/User");

const registerTeacher = async (req, res) => {
    try {
        const { name, email, password, subject, phone } = req.body;
        const teacherExists = await Teacher.findOne({ email });
    
        if (teacherExists) {
            return res.status(400).send({ error: "Teacher with this email already exists" });
        }

        const lastTeacher = await Teacher.findOne({}, {}, { sort: { 'createdAt' : -1 } }); // Get the most recently added teacher
        const lastTeacherId = lastTeacher ? parseInt(lastTeacher.teacherId.substring(1)) : 0; // Extract the teacher ID from the most recently added teacher
        const newTeacherId = "T" + (lastTeacherId + 1).toString().padStart(4, "0"); // Generate the new teacher ID
        
        const hashedPassword = await bcrypt.hash(password, 8);
        const teacher = new Teacher({
            name,
            email,
            password: hashedPassword,
            subject,
            phone,
            TeacherId: newTeacherId // Save the new teacher ID to the database
        });
        await teacher.save();
    
        res.status(201).json({ message: "Teacher added successfully" });
    } catch (e) {
        res.status(500).send(e);
    }
};

  const loginTeacher = async (req, res) => {
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

        const token = jwt.sign({ _id: user._id }, "Secret");

        res.json({ user, token });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
};


const viewAllTeacher = async (req, res) => {
    try {
      const allTeacher = await Teacher.find({}, { password: 0 }); // Excludes the password field from the query result
  
      if (!allTeacher || allTeacher.length === 0) {
        return res.status(404).json({ message: "No Teacher found" });
      }
  
      const TeacherDetails = allTeacher.map((Teacher) => {
        const { name, email, phone, _id ,TeacherId, subject } = Teacher;
        return { _id, name, email, phone, TeacherId, subject };
      });
  
      res.status(200).json(TeacherDetails);
    } catch (e) {
      res.status(500).send(e);
    }
  };
  
  const deleteTeacher = async (req, res) => {
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

  module.exports={
    registerTeacher , loginTeacher , viewAllTeacher , deleteTeacher
}