const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { admin , Student , Teacher } = require("../Models/User");

const registerAdmin = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const adminExists = await admin.findOne({ email });

    if (adminExists) {
      return res.status(400).send({ error: "Admin with this email already exists" });
    }

    const lastAdmin = await admin.findOne().sort({ field: 'asc', _id: -1 });
    const lastAdminId = lastAdmin?.adminId ? parseInt(lastAdmin.adminId.slice(5)) : 0;
    const newAdminId = `admin${(lastAdminId + 1).toString().padStart(4, '0')}`;

    const hashedPassword = await bcrypt.hash(password, 8);
    const newAdmin = new admin({
      adminId: newAdminId,
      name,
      email,
      password: hashedPassword,
      phone,
    });
    await newAdmin.save();

    res.status(201).json({ message: "Admin created successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Error creating admin" });
  }
};


    // Delete Admin function
    const deleteAdmin = async (req, res) => {
      try {
        const { adminId } = req.body;
        const foundAdmin = await admin.findOne({ adminId });
        
        if (!foundAdmin) {
          return res.status(404).json({ message: "Admin not found" });
        }
        
        const deletedAdmin = await admin.findByIdAndDelete(foundAdmin._id);
        
        res.status(200).json({ message: "Admin deleted successfully" });
      } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Error deleting admin" });
      }
    };
    

// View All Admin function
const viewAllAdmins = async (req, res) => {
  try {
    //const allAdmins = await admin.find({}, { password: 0, _id: 0, __v: 0 });

  const allAdmins = await admin.find({}, { password: 0 }); // Excludes the password field from the query result

    if (!allAdmins || allAdmins.length === 0) {
      return res.status(404).json({ message: "No admins found" });
    }

    const adminDetails = allAdmins.map((admin) => {
      const { name, email, phone, _id ,adminId } = admin;
      return { _id, name, email, phone  , adminId};
    });
    

    res.status(200).json(adminDetails);
  } catch (e) {
    res.status(500).send(e);
  }
};


// Update Admin function
const updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, phone } = req.body;
    const foundAdmin = await admin.findById(id);

    if (!foundAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    if (email !== foundAdmin.email) {
      const emailExists = await admin.findOne({ email });
      if (emailExists) {
        return res.status(400).json({ message: "Email already exists" });
      }
    }

    const hashedPassword = password ? await bcrypt.hash(password, 8) : foundAdmin.password;

    const updatedAdmin = await admin.findByIdAndUpdate(
      id,
      {
        name: name || foundAdmin.name,
        email: email || foundAdmin.email,
        password: hashedPassword,
        phone: phone || foundAdmin.phone,
      },
      { new: true }
    );

    res.status(200).json(updatedAdmin);
  } catch (e) {
    res.status(500).send(e);
  }
};


  
  
  

//   const loginUser = async (req, res) => {
//     try {
//       const { email, password } = req.body;
  
//       const user = await User.findOne({ email });
  
//       if (!user) {
//         return res.status(400).json({ error: "User not found" });
//       }
  
//       const isMatch = await bcrypt.compare(password, user.password);
  
//       if (!isMatch) {
//         return res.status(400).json({ error: "Invalid credentials" });
//       }
  
//       const token = jwt.sign({ _id: user._id }, "Secret");
  
//       res.json({ user, token });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Server error");
//     }
//   };
const loginAdmin = async (req, res) => {
    try {
        const { email, password} = req.body;

        let user;
        
            user = await admin.findOne({ email });
        

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

  

module.exports = {
  registerAdmin,
  updateAdmin,
  deleteAdmin,
  viewAllAdmins,
  loginAdmin,
};
