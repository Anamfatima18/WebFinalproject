import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import TopNavBar from './topnavbar';

const CourseDesignerView = () => {
  const [courseDesigners, setCourseDesigners] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const handleUpdate = (id) => {
    navigate(`/courseDesigner/update/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete the course designer?');
      if (confirmDelete) {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:4000/api/courseDesigner/delete/${id}`, {
          headers: {
            token: token,
          },
        });
        setCourseDesigners((courseDesigners) => courseDesigners.filter((designer) => designer._id !== id));
        console.log(`Delete course designer with ID: ${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchCourseDesigners = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/coursedesigner/viewAll', {
          headers: {
            token: token,
          },
        });
        setCourseDesigners(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourseDesigners();
  }, [handleDelete]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCourseDesigners = courseDesigners.filter((designer) => {
    const matchSearchQuery =
      (designer.designerId && designer.designerId.includes(searchQuery)) ||
      (designer.name && designer.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchSearchQuery;
  });

  return (
    <div className="course-designer">
      <div className="fixed-top">
        <TopNavBar />
      </div>
      <div className="content-container">
        <div className="search-container">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Course Designer ID or Name"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="table-container">
          <h2>Course Designer List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Course Designer ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourseDesigners.map((designer) => (
                <tr key={designer._id}>
                  <td>{designer.CourseDesignerId}</td>
                  <td>{designer.name}</td>
                  <td>{designer.email}</td>
                  <td>{designer.phone}</td>
                  <td>
                    <button className="margin-left" onClick={() => handleUpdate(designer.CourseDesignerId)}>
                      Update
                    </button>
                    <button
                      className="margin-left"
                      style={{ backgroundColor: '#B90E0A' }}
                      onClick={() => handleDelete(designer.CourseDesignerId)}
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

export default CourseDesignerView;
