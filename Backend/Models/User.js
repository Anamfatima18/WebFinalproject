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

  

  
  export const CourseDesignerSchema = new mongoose.Schema({
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
 
  export const CourseDesigner = mongoose.model('CourseDesigner' , CourseDesignerSchema)
  
  // module.exports = {
  //   Student,
  //   Teacher,
  //   admin,
  //   CourseDesigner,
  // };
  
  // export default{ Student , Teacher  , CourseDesigner}

