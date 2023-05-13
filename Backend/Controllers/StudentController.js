
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Student  } = require("../Models/User");

const registerStudent = async (req, res) => {
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
  
  const loginStudent = async (req, res) => {
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
const deleteStudent = async (req, res) => {
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

const viewAllStudents = async (req, res) => {
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
  
  



module.exports={
    registerStudent , loginStudent , deleteStudent , viewAllStudents
}