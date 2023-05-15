import mongoose from 'mongoose';


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
    phone: {
      type: String,
      required: true
    },
   
  })

  const CourseDesignerSchema = new mongoose.Schema({
    CourseDesignerId: {
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
  export const admin = mongoose.model('admin', adminSchema);
  export const Student = mongoose.model('Student', studentSchema);
  export const Teacher = mongoose.model('Teacher', teacherSchema);
  export const CourseDesigner = mongoose.model('CourseDesigner' , CourseDesignerSchema)
  
  // module.exports = {
  //   Student,
  //   Teacher,
  //   admin,
  //   CourseDesigner,
  // };
  
  

