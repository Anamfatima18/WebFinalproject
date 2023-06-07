
// const bcrypt = require("bcryptjs");
// const {CourseDesigner} = require("../Models/User");
import bcrypt from "bcryptjs";
import { CourseDesigner } from "../Models/User.js";

export const RegisterCourseDesigner = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const DesignerExists = await CourseDesigner.findOne({ email });

    if (DesignerExists) {
      return res.status(400).send(  "Course designer with this email already exists" );
    }

    const lastCourseDesigner = await CourseDesigner.findOne().sort({ field: 'asc', _id: -1 });
    const lastCourseDesignerId = lastCourseDesigner?.CourseDesignerId ? parseInt(lastCourseDesigner.CourseDesignerId.slice(2)) : 0;
    const newCourseDesignerId = `cd${(lastCourseDesignerId + 1).toString().padStart(4, '0')}`;

    const hashedPassword = await bcrypt.hash(password, 8);
    const courseDesigner = new CourseDesigner({
      name,
      email,
      phone,
      password: hashedPassword,
      CourseDesignerId: newCourseDesignerId,
    });
    await courseDesigner.save();

    res.status(201).json({ message: "Designer added successfully" });
  } catch (e) {
    res.status(500).send(e);
  }
};

// View All Admin function

export const viewAllDesigners = async (req, res) => {
    try {
      const allDesigners = await CourseDesigner.find({}, { password: 0 }); // Excludes the password field from the query result
  
      if (!allDesigners|| allDesigners.length === 0) {
        return res.status(404).json({ message: "No designer found" });
      }
  
      const DesignerDetails = allDesigners.map((CourseDesigner) => {
       const { name, email, phone, _id ,CourseDesignerId} = CourseDesigner;
        return { _id, name, email, phone, CourseDesignerId };
      });
  
      res.status(200).json(DesignerDetails);
    } catch (e) {
      res.status(500).send(e);
    }
  };
  
  export const deleteCourseDesigner = async (req, res) => {
    try {
      const { CourseDesignerId } = req.params;
      const foundDesigner = await CourseDesigner.findOne({ CourseDesignerId });
      
      if (!foundDesigner) {
        return res.status(404).json({ message: "Designer not found" });
      }
      
      const DeletedDesigner = await CourseDesigner.findByIdAndDelete(foundDesigner._id);
      
      res.status(200).json({ message: "Designer deleted successfully" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error deleting Designer" });
    }
  };


  export const updateCourseDesigner = async (req, res) => {
    const { CourseDesignerId } = req.params;
  
    try {
      const courseDesigner = await CourseDesigner.findOneAndUpdate(
        { CourseDesignerId },
        req.body,
        { new: true }
      );
  
      if (!courseDesigner) {
        return res.status(404).json({ error: 'Course Designer not found' });
      }
  
      return res.status(200).json({
        message: 'Course Designer updated successfully',
        courseDesigner,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error updating Course Designer' });
    }
  };
  export const viewDesignerById = async (req, res) => {
    const { CourseDesignerId } = req.params;
  
    try {
      const designer = await CourseDesigner.findOne({ CourseDesignerId });
  
      if (!designer) {
        return res.status(404).json({ message: 'Designer not found' });
      }
  
      const { name, email, phone, _id } = designer;
      const designerDetails = { _id, name, email, phone, CourseDesignerId };
  
      res.status(200).json(designerDetails);
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  
  // module.exports = {
  //   RegisterCourseDesigner,
  //   viewAllDesigners,
  //   deleteCourseDesigner,
  //   updateCourseDesigner,
  // };
  
  // export {
  //   RegisterCourseDesigner,
  //   viewAllDesigners,
  //   deleteCourseDesigner,
  //   updateCourseDesigner,
  // };