import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import SideNavBar from './navbar';
import TopNavBar from './topnavbar';

const UpdateTeacherContainer = styled('div')({
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
  width: '500px',
  border: '2px solid #1e3f66',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  marginTop: '20px',
});

const FormInput = styled('div')({
  marginBottom: '20px',
  width: '100%',
});

const UpdateTeacher = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:4000/api/teacher/viewAll/${id}`, {
          headers: {
            token: token,
          },
        });

        const { name, email, phone} = response.data;
        setName(name);
        setEmail(email);
        setPhone(phone);
        // setPassword(password);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeacher();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const updatedTeacher = {
      name,
      email,
      phone,
    //   password,
    };

    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:4000/api/teacher/update/${id}`, updatedTeacher, {
        headers: {
          token: token,
        },
      });

      setIsLoading(false);
      navigate('/teacher');
      alert('Teacher updated successfully!');
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <UpdateTeacherContainer>
      <TopNavBar />
      <ContentContainer>
        <Typography variant="h5" align="center" gutterBottom style={{ color: '#1e3f66', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          Update Teacher
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
              <Button variant="contained" color="primary" type="submit" fullWidth style={{ background: '#1e3f66' }} disabled={isLoading}>
                {isLoading ? 'Updating...' : 'Update'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </ContentContainer>
    </UpdateTeacherContainer>
  );
};

export default UpdateTeacher;
