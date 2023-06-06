import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './topnavbar';

const TeacherView = () => {
  const [teachers, setTeachers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const handleUpdate = id => {
    navigate(`/teacher/update/${id}`);
  };

  const handleDelete = async id => {
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete the teacher?');
      if (confirmDelete) {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:4000/api/teacher/delete/${id}`, {
          headers: {
            token: token,
          },
        });
        setTeachers(teachers => teachers.filter(teacher => teacher._id !== id));
        console.log(`Delete teacher with ID: ${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/teacher/viewAll', {
          headers: {
            token: token,
          },
        });
        setTeachers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeachers();
  }, [handleDelete]);

  const handleSearch = e => {
    setSearchQuery(e.target.value);
  };

//   const filteredTeachers = teachers.filter(teacher => {
//     const matchSearchQuery =
//       teacher.teacherId.includes(searchQuery) ||
//       teacher.name.toLowerCase().includes(searchQuery.toLowerCase());

//     return matchSearchQuery;
//   });
const filteredTeachers = teachers.filter(teacher => {
    const matchSearchQuery =
      (teacher.teacherId && teacher.teacherId.includes(searchQuery)) ||
      (teacher.name && teacher.name.toLowerCase().includes(searchQuery.toLowerCase()));
  
    return matchSearchQuery;
  });
  

  

  return (
    <div className="teacher">
      <div className="fixed-top">
        <TopNavBar />
      </div>
      <div className="content-container">
        <div className="search-container">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Teacher ID or Name"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="table-container">
          <h2>Teacher List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Teacher ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.map(teacher => (
                <tr key={teacher._id}>
                  <td>{teacher.TeacherId}</td>
                  <td>{teacher.name}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.phone}</td>
                  <td>
                    <button
                      className="margin-left"
                      onClick={() => handleUpdate(teacher.TeacherId)}
                    >
                      Update
                    </button>
                    <button
                      className="margin-left"
                      style={{ backgroundColor: '#B90E0A' }}
                      onClick={() => handleDelete(teacher.TeacherId)}
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

export default TeacherView;
