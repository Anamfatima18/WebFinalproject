const mongoose=require('mongoose')


const adminSchema = new mongoose.Schema({
  adminId: {
    type: String,
    required: true,
    unique: true,
  },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    
    
 
  }, {timestamps: true})

  

  const studentSchema = new mongoose.Schema({
    StudentId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    batch: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true
    },
  },{timestamps: true})
  
  const teacherSchema = new mongoose.Schema({
    TeacherId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true
    },
   
  },{timestamps: true})
  const admin = mongoose.model('admin', adminSchema);
  const Student = mongoose.model('Student', studentSchema);
  const Teacher = mongoose.model('Teacher', teacherSchema);
  
  module.exports = {
    Student,
    Teacher,
    admin,
  };
  
  
