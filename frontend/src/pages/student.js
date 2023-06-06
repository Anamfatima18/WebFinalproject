


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import UpdateStudent from './UpdateStudent';
import { useNavigate } from 'react-router-dom';
import SideNavBar from './navbar';

const StudentView = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  // const [selectedStudentId, setSelectedStudentId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    const verifyToken = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/student/viewAll', {
          headers: {
            token: token,
          },
        });
        setStudents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    verifyToken();
  }, []);

  const handleSearch = e => {
    setSearchQuery(e.target.value);
  };

  const filteredStudents = students.filter(student => {
    const matchSearchQuery =
      student.StudentId.includes(searchQuery) ||
      student.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchSearchQuery;
  });

  const handleUpdate = id => {
    navigate(`/student/update/${id}`);
  };

  const handleDelete = async id => {
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete the student?');
      if (confirmDelete) {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:4000/api/student/delete/${id}`, {
          headers: {
            token: token,
          },
        });
        setStudents(students => students.filter(student => student._id !== id));
        console.log(`Delete student with ID: ${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <div className="student">
      <SideNavBar />
      <div className="content-container">
        <div className="search-container">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Student ID or Name"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="table-container">
          <h2>Student List</h2>
          <table className="table">
            <thead className="head" style={{backgroundColor:'#1e3f66'}}>
              <tr>
                <th>Student ID</th>
                <th>Batch</th>
                <th>Email</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => (
                <tr key={student._id}>
                  <td>{student.StudentId}</td>
                  <td>{student.batch}</td>
                  <td>{student.email}</td>
                  <td>{student.name}</td>
                  <td>{student.phone}</td>
                  <td>
                    <button
                      className=" margin-left"
                      onClick={() => handleUpdate(student.StudentId)}
                    >
                      Update
                    </button>
                    <button
                      className=" margin-left" style={{backgroundColor: '#B90E0A'}}
                      onClick={() => handleDelete(student.StudentId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          
        </div>
      </div>
    </div>
  );
};

export default StudentView;
