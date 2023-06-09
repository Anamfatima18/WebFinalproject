import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import SideNavBar from './navbar';
import TopNavBar from './topnavbar';

const UpdateStudentContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
});

const ContentContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  padding: '40px',
  borderRadius: '8px',
  width: '500px', // Adjust the width as desired
  border: '2px solid #1e3f66', // Add border color
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add box shadow
  marginTop: '20px', // Add margin to separate the form from the navigation bar
});

const FormInput = styled('div')({
  marginBottom: '20px',
  width: '100%',
});

const UpdateStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [batch, setBatch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:4000/api/student/viewAll/${id}`, {
          headers: {
            token: token,
          },
        });

        const { name, email, phone, batch } = response.data;
        setName(name);
        setEmail(email);
        setPhone(phone);
        setBatch(batch);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const updatedStudent = {
      name,
      email,
      phone,
      batch,
    };

    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:4000/api/student/update/${id}`, updatedStudent, {
        headers: {
          token: token,
        },
      });

      setIsLoading(false);
      navigate('/student');
      alert('Student updated successfully!');
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <UpdateStudentContainer>
      <TopNavBar />
      <ContentContainer>
        <Typography variant="h5" align="center" gutterBottom style={{ color: '#1e3f66', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          Update Student
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormInput>
                <TextField
                  id="name"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </FormInput>
            </Grid>
            <Grid item xs={12}>
              <FormInput>
                <TextField
                  id="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </FormInput>
            </Grid>
            <Grid item xs={12}>
              <FormInput>
                <TextField
                  id="phone"
                  label="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </FormInput>
            </Grid>
            <Grid item xs={12}>
              <FormInput>
                <TextField
                  id="batch"
                  label="Batch Number"
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                  required
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </FormInput>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit" fullWidth style={{ background: '#1e3f66' }} disabled={isLoading}>
                {isLoading ? 'Updating...' : 'Update '}
              </Button>
            </Grid>
          </Grid>
        </form>
      </ContentContainer>
    </UpdateStudentContainer>
  );
};

export default UpdateStudent;
