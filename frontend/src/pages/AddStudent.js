



// // import React, { useState} from 'react';
// // import axios from 'axios';
// // import './page.css';
// // import '@fortawesome/fontawesome-free/css/all.min.css';
// // import SideNavBar from './navbar';

// // const AddStudent = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [batch, setBatch] = useState('');
// //   const [phone, setPhone] = useState('');

// //   const handleFormSubmit = async (e) => {
// //     e.preventDefault();

// //     // Create the student object
// //     const student = {
// //       name,
// //       email,
// //       password,
// //       batch,
// //       phone,
// //     };

    

// //     try {
// //       const token = localStorage.getItem('token');
// //       console.log(token)
// //       // Make a POST request to the backend API to register the student
// //       const response = await axios.post('http://localhost:4000/api/student/register', student,{
// //                     headers: {
// //                       token:  token,
// //                      //Authorization: `Bearer ${token}`,
// //                     } 
// //                   } );
     
// //       console.log(response.data);
// //       // Reset form fields after successful submission
// //       setName('');
// //       setEmail('');
// //       setPassword('');
// //       setBatch('');
// //       setPhone('');
// //       //setErrorMessage(''); // Student added successfully
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

  

// //   return (
// //     <div className="AddStudent">
// //     <SideNavBar />
// //     <section className="vh-100" style={{ backgroundColor: '#00ABF0' }}>
// //     <div className="container h-100" >
// //       <div className="row d-flex justify-content-center align-items-center h-100">
// //         <div className="col-lg-12 col-xl-11">
// //           <div className="card text-black" style={{ borderRadius: '25px'  , maxWidth: '800px' , maxHeight: '600px'}}>
// //             <div className="card-body p-md-5">
// //               <div className="row justify-content-center">
// //                 <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
// //                   <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">ADD STUDENT</p>
// //                   <form onSubmit={handleFormSubmit}  style={{ maxWidth: '300px' }} className="add-student-form mx-1 mx-md-4">
// //                     <div className="d-flex flex-row align-items-center mb-4 form-group ">
// //                       <i className="fas fa-user fa-lg me-3 fa-fw align-self-start align-middle"></i>
// //                       <div className="form-outline flex-fill mb-0">
// //                         <label className="form-label" htmlFor="form3Example1c">Your Name</label>
// //                         <input type="text" id="form3Example1c" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        
// //                       </div>
// //                     </div>
// //                     <div className="d-flex flex-row align-items-center mb-4">
// //                       <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
// //                       <div className="form-outline flex-fill mb-0">
// //                         <label className="form-label" htmlFor="form3Example3c">Your Email</label>
// //                         <input type="email" id="form3Example3c" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        
// //                       </div>
// //                     </div>
// //                     <div className="d-flex flex-row align-items-center mb-4">
// //                       <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
// //                       <div className="form-outline flex-fill mb-0">
// //                       <label className="form-label" htmlFor="form3Example4c">Password</label>
// //                         <input type="password" id="form3Example4c" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        
// //                       </div>
// //                     </div>
// //                     <div className="d-flex flex-row align-items-center mb-4">
// //                       <i className="fas fa-key fa-lg me-3 fa-fw"></i>
// //                       <div className="form-outline flex-fill mb-0">
// //                         <label className="form-label" htmlFor="form3Example4cd">Batch No</label>
// //                         <input type="password" id="form3Example4cd" className="form-control" value={batch} onChange={(e) => setBatch(e.target.value)} />
                       
// //                       </div>
// //                     </div>
// //                     <div className="d-flex flex-row align-items-center mb-4">
// //                       <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
// //                       <div className="form-outline flex-fill mb-0">
// //                       <label className="form-label" htmlFor="form3Example5c">Phone Number</label>
// //                         <input type="text" id="form3Example5c" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
                       
// //                       </div>
// //                     </div>
// //                     {/* <div className="form-check d-flex justify-content-center mb-5">
// //                       <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
// //                       <label className="form-check-label" htmlFor="form2Example3">
// //                         I agree to all statements in <a href="#!">Terms of service</a>
// //                       </label>
// //                     </div> */}
// //                     <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
// //                       <button type="submit" className="btn btn-primary  custom-button">ADD</button>
// //                     </div>
// //                   </form>
// //                 </div>
// //                 <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
// //                   <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </section>
// //   </div>
// //   );
// // };

// // export default AddStudent;
// import React, { useState } from 'react';
// import axios from 'axios';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import SideNavBar from './navbar';
// import './page.css'

// const AddStudent = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [batch, setBatch] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     // Create the student object
//     const student = {
//       name,
//       email,
//       password,
//       batch,
//       phone,
//     };

//     try {
//       const token = localStorage.getItem('token');
//       console.log(token)
//       // Make a POST request to the backend API to register the student
//       const response = await axios.post('http://localhost:4000/api/student/register', student, {
//         headers: {
//           token:  token,
//         } 
//       });
     
//       console.log(response.data);
//       // Reset form fields after successful submission
//       setName('');
//       setEmail('');
//       setPassword('');
//       setBatch('');
//       setPhone('');
//       //setErrorMessage(''); // Student added successfully
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="AddStudent">
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-2">
//             <SideNavBar />
//           </div>
//           <div className="col-md-12">
//             <section className="vh-100" style={{ backgroundColor: '#00ABF0' }}>
//               <div className="container h-100">
//                 <div className="row d-flex justify-content-center align-items-center h-100">
//                   <div className="col-lg-12 col-xl-11">
//                     <div className="card text-black" style={{ borderRadius: '25px', maxWidth: '800px', maxHeight: '600px' ,marginLeft:"300px"}}>
//                       <div className="card-body p-md-5">
//                         <div className="row justify-content-center">
//                           <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
//                             <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">ADD STUDENT</p>
//                             <form onSubmit={handleFormSubmit} style={{ maxWidth: '300px'  }} className="add-student-form mx-auto">
//                               <div className="d-flex flex-row align-items-center mb-4 form-group">
//                                 <i className="fas fa-user fa-lg me-3 fa-fw align-self-start "></i>
//                                 <div>
//                                   <label className="form-label" htmlFor="form3Example1c">Your Name</label>
//                                   <input type="text" id="form3Example1c" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
//                                 </div>
//                               </div>
//                               <div className="d-flex flex-row align-items-center mb-4">
//                                 <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                                 <div>
//                                   <label className="form-label" htmlFor="form3Example3c">Your Email</label>
//                                   <input type="email" id="form3Example3c" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
//                                 </div>
//                               </div>
//                               <div className="d-flex flex-row align-items-center mb-4">
//                                 <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
//                                 <div>
//                                   <label className="form-label" htmlFor="form3Example4c">Password</label>
//                                   <input type="password" id="form3Example4c" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
//                                 </div>
//                               </div>
//                               <div className="d-flex flex-row align-items-center mb-4">
//                                 <i className="fas fa-key fa-lg me-3 fa-fw"></i>
//                                 <div>
//                                   <label className="form-label" htmlFor="form3Example4cd">Batch No</label>
//                                   <input type="password" id="form3Example4cd" className="form-control" value={batch} onChange={(e) => setBatch(e.target.value)} />
//                                 </div>
//                               </div>
//                               <div className="d-flex flex-row align-items-center mb-4">
//                                 <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
//                                 <div>
//                                   <label className="form-label" htmlFor="form3Example5c">Phone Number</label>
//                                   <input type="text" id="form3Example5c" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
//                                 </div>
//                               </div>
//                               <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//                                 <button type="submit" className="btn btn-primary custom-button">ADD</button>
//                               </div>
//                             </form>
//                           </div>
//                           <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
//                             <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddStudent;

import React, { useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SideNavBar from './navbar';
import './page.css';
import studentImage from './Learning-Management@2x.webp'; // Replace with the actual image file and its path

const AddStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [batch, setBatch] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the student object
    const student = {
      name,
      email,
      password,
      batch,
      phone,
    };

    try {
      const token = localStorage.getItem('token');
      console.log(token);
      // Make a POST request to the backend API to register the student
      const response = await axios.post('http://localhost:4000/api/student/register', student, {
        headers: {
          token: token,
        },
      });

      console.log(response.data);
      // Reset form fields after successful submission
      setName('');
      setEmail('');
      setPassword('');
      setBatch('');
      setPhone('');
      //setErrorMessage(''); // Student added successfully
    } catch (error) {
      console.error(error);
      setErrorMessage(error)
    }
  };

  return (
    <div className='addcoursepage'>
      <SideNavBar/>
    <div className="container">
      <div className="form-container">
        <h2 style={{color:"#ccc", marginLeft:"100px"}}>Add Student</h2>
        {errorMessage && <p>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="title">Email:</label>
            <input type="text" id="title" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="code">Password:</label>
            <input type="text" id="code" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="description">Batch:</label>
            <textarea id="description" value={batch} onChange={(e) => setBatch(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="type">Phone:</label>
            <input type="text" id="type" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <button id="addCourse" type="submit">Add Course</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AddStudent;

