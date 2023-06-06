import mongoose from 'mongoose'
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
  phone: {
    type: String,
    required: true
    },
   
  })

  export const Teacher = mongoose.model('Teacher', teacherSchema);
  
  // sexport default Teacher;

