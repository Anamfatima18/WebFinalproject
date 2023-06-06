


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// const UpdateStudent = () => {
//   const { id } = useParams();

//   const [student, setStudent] = useState({});
//   const [updatedStudent, setUpdatedStudent] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [isUpdated, setIsUpdated] = useState(false);
//   const [showForm, setShowForm] = useState(true);

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(
//           `http://localhost:4000/api/student/viewAll/${id}`,
//           {
//             headers: {
//               token: token,
//             },
//           }
//         );

//         setStudent(response.data);
//         setUpdatedStudent(response.data);
//         setShowForm(true); // Ensure the form is shown for each student update
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchStudent();
//     setIsUpdated(false); // Reset the isUpdated state when id changes
//   }, [id]);

//   const handleChange = (e) => {
//     setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsLoading(true);

//     try {
//       const token = localStorage.getItem('token');

//       await axios.put(
//         `http://localhost:4000/api/student/update/${id}`,
//         updatedStudent,
//         {
//           headers: {
//             token: token,
//           },
//         }
//       );

//       console.log('Student updated successfully');
//       setIsUpdated(true);
//       setShowForm(false);
//       setUpdatedStudent({});
//     } catch (error) {
//       console.error(error);
//     }

//     setIsLoading(false);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isUpdated) {
//     return (
//       <div>
//         Student updated successfully!
//       </div>
//     );
//   }

//   return (
//     <div className="Auth-form-container" onSubmit={handleSubmit}>
//       <form className="Auth-form">
//         <div className="Auth-form-content">
//           <h3 className="Auth-form-title">Update Student</h3>
//           {showForm && (
//             <div>
//               <div className="form-group mt-3">
//                 <label>Name:</label>
//                 <input
//                   type="text"
//                   className="form-control mt-1"
//                   placeholder="Enter name"
//                   name="name"
//                   value={updatedStudent.name || student.name || ''}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group mt-3">
//                 <label>Email:</label>
//                 <input
//                   type="email"
//                   className="form-control mt-1"
//                   placeholder="Enter email"
//                   name="email"
//                   value={updatedStudent.email || student.email || ''}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group mt-3">
//                 <label>Phone:</label>
//                 <input
//                   type="text"
//                   className="form-control mt-1"
//                   placeholder="Enter phone"
//                   name="phone"
//                   value={updatedStudent.phone || student.phone || ''}
//                   onChange={handleChange}
//                 />
//               </div>
//               {/* Add more fields as needed */}
//               <div className="d-grid gap-2 mt-3">
//                 <button type="submit" className="btn btn-primary">
//                   Update
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UpdateStudent;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const UpdateStudent = () => {
//   const { id } = useParams();

//   const [student, setStudent] = useState({});
//   const [updatedStudent, setUpdatedStudent] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [isUpdated, setIsUpdated] = useState(false);
//   const [showForm, setShowForm] = useState(true);

  // useEffect(() => {
  //   const fetchStudent = async () => {
  //     try {
  //       const token = localStorage.getItem('token');
  //       const response = await axios.get(
  //         `http://localhost:4000/api/student/viewAll/${id}`,
  //         {
  //           headers: {
  //             token: token,
  //           },
  //         }
  //       );

  //       setStudent(response.data);
  //       setUpdatedStudent(response.data);
  //       setShowForm(true); // Ensure the form is shown for each student update
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchStudent();
  //   setIsUpdated(false); // Reset the isUpdated state when id changes
  // }, [id]);
//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(
//           `http://localhost:4000/api/student/viewAll/${id}`,
//           {
//             headers: {
//               token: token,
//             },
//           }
//         );
  
//         console.log(response.data); // Check if the data is received correctly
  
//         setStudent(response.data);
//         setUpdatedStudent(response.data );

//         setShowForm(true); // Ensure the form is shown for each student update
//       } catch (error) {
//         console.error(error);
//       }
//     };
  
  
//     fetchStudent();
//     setIsUpdated(false); // Reset the isUpdated state when id changes
//   }, [id, updatedStudent]);
  
//   const handleChange = (e) => {
//     setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsLoading(true);

//     try {
//       const token = localStorage.getItem('token');

//       await axios.put(
//         `http://localhost:4000/api/student/update/${id}`,
//         updatedStudent,
//         {
//           headers: {
//             token: token,
//           },
//         }
//       );

//       console.log('Student updated successfully');
//       setIsUpdated(true);
//       setShowForm(false);
//       setUpdatedStudent({});
//     } catch (error) {
//       console.error(error);
//     }

//     setIsLoading(false);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isUpdated) {
//     return (
//       <div>
//         Student updated successfully!
//       </div>
//     );
//   }

//   return (
//     <div className="Auth-form-container" onSubmit={handleSubmit}>
//       <form className="Auth-form">
//         <div className="Auth-form-content">
//           <h3 className="Auth-form-title">Update Student</h3>
//           {showForm && (
//             <div>
//               <div className="form-group mt-3">
//                 <label>Name:</label>
//                 <input
//                   type="text"
//                   className="form-control mt-1"
//                   placeholder="Enter name"
//                   name="name"
//                   value={updatedStudent.name || student.name || ''}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group mt-3">
//                 <label>Email:</label>
//                 <input
//                   type="email"
//                   className="form-control mt-1"
//                   placeholder="Enter email"
//                   name="email"
//                   value={updatedStudent.email || student.email || ''}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group mt-3">
//                 <label>Phone:</label>
//                 <input
//                   type="text"
//                   className="form-control mt-1"
//                   placeholder="Enter phone"
//                   name="phone"
//                   value={updatedStudent.phone || student.phone || ''}
//                   onChange={handleChange}
//                 />
//               </div>
//               {/* Add more fields as needed */}
//               <div className="d-grid gap-2 mt-3">
//                 <button type="submit" className="btn btn-primary">
//                   Update
//                 </button>
//               </div>
              
//             </div>
//           )}
//         </div>
//       </form>
      
//     </div>
    
//   );
  
// };

// export default UpdateStudent;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const UpdateStudent = () => {
//   const { id } = useParams();

//   const [student, setStudent] = useState({});
//   const [updatedStudent, setUpdatedStudent] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [isUpdated, setIsUpdated] = useState(false);
//   const [showForm, setShowForm] = useState(true);

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(
//           `http://localhost:4000/api/student/viewAll/${id}`,
//           {
//             headers: {
//               token: token,
//             },
//           }
//         );

//         setStudent(response.data);
//         setUpdatedStudent(response.data);
//         setShowForm(true); // Ensure the form is shown for each student update
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchStudent();
//     setIsUpdated(false); // Reset the isUpdated state when id changes
//   }, [id]);

//   const handleChange = (e) => {
//     setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsLoading(true);

//     try {
//       const token = localStorage.getItem('token');

//       await axios.put(
//         `http://localhost:4000/api/student/update/${id}`,
//         updatedStudent,
//         {
//           headers: {
//             token: token,
//           },
//         }
//       );

//       console.log('Student updated successfully');
//       setIsUpdated(true);
//       setShowForm(false);
//       setUpdatedStudent({});
//     } catch (error) {
//       console.error(error);
//     }

//     setIsLoading(false);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isUpdated) {
//     return <div>Student updated successfully!</div>;
//   }

//   return (
//     <div className="Auth-form-container" onSubmit={handleSubmit}>
//       <form className="Auth-form">
//         <div className="Auth-form-content">
//           <h3 className="Auth-form-title">Update Student</h3>
//           {showForm && (
//             <div>
//               <div className="form-group mt-3">
//                 <label>Name:</label>
//                 <input
//                   type="text"
//                   className="form-control mt-1"
//                   placeholder="Enter name"
//                   name="name"
//                   value={updatedStudent.name || ''}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group mt-3">
//                 <label>Email:</label>
//                 <input
//                   type="email"
//                   className="form-control mt-1"
//                   placeholder="Enter email"
//                   name="email"
//                   value={updatedStudent.email || ''}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="form-group mt-3">
//                 <label>Phone:</label>
//                 <input
//                   type="text"
//                   className="form-control mt-1"
//                   placeholder="Enter phone"
//                   name="phone"
//                   value={updatedStudent.phone || ''}
//                   onChange={handleChange}
//                 />
//               </div>
//               {/* Add more fields as needed */}
//               <div className="d-grid gap-2 mt-3">
//                 <button type="submit" className="btn btn-primary">
//                   Update
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UpdateStudent;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SideNavBar from './navbar';

const UpdateStudent = () => {
  const { id } = useParams();

  const [student, setStudent] = useState({});
  const [updatedStudent, setUpdatedStudent] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [showForm, setShowForm] = useState(false);
  // const navigate = useNavigate();
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:4000/api/student/viewAll/${id}`, {
          headers: {
            token: token,
          },
        });

        setStudent(response.data);
        console.log(response.json);
        setUpdatedStudent(response.data);
        setShowForm(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudent();
    setIsUpdated(false);
  }, [id]);

  const handleChange = (e) => {
    setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const token = localStorage.getItem('token');

      await axios.put(`http://localhost:4000/api/student/update/${id}`, updatedStudent, {
        headers: {
          token: token,
        },
      });

      console.log('Student updated successfully');
      // navigate(`/student`);
      setIsUpdated(true);
      // setShowForm(false);
      setUpdatedStudent({});
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isUpdated) {
    return <div>Student updated successfully!</div>;
  }

  return (
    <div>
    <SideNavBar/>
    <div className="Auth-form-container" onSubmit={handleSubmit}>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Update Student</h3>
          {showForm && (
            <div>
              <div className="form-group mt-3">
                <label>Name:</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter name"
                  name="name"
                  value={updatedStudent.name || student.name || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-3">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  name="email"
                  value={updatedStudent.email || student.email || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-3">
                <label>Phone:</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter phone"
                  name="phone"
                  value={updatedStudent.phone || student.phone || ''}
                  onChange={handleChange}
                />
              </div>
              {/* Add more fields as needed */}
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
    </div>
  );
};

export default UpdateStudent;
