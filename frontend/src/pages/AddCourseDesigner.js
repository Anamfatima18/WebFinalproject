import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, InputAdornment, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import TopNavBar from './topnavbar';

const AddCourseDesignerContainer = styled('div')({
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
  marginTop: '40px', // Add top margin to separate the form from the top navbar
});

const FormInput = styled('div')({
  marginBottom: '20px',
  width: '100%',
});

const AddCourseDesigner = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const newCourseDesigner = {
      name,
      email,
      phone,
      password,
    };

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:4000/api/courseDesigner/register', newCourseDesigner, {
        headers: {
          token: token,
        },
      });

      setIsLoading(false);
      navigate('/CourseDesigner');
      alert('Course designer added successfully!');
    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response.status === 400) {
        setError('Course designer with the provided email already exists.'); // Set specific error message for duplicate email
      } else {
        setError('Error adding course designer. Please try again.'); // Set generic error message
      }
      console.error(error);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <AddCourseDesignerContainer>
      <TopNavBar />
      <ContentContainer>
        <Typography variant="h5" align="center" gutterBottom style={{ color: '#1e3f66', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          Add Course Designer
        </Typography>
        {error && (
          <Typography variant="body1" align="center" color="error" gutterBottom>
            {error}
          </Typography>
        )}
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
                  id="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormInput>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit" fullWidth style={{ background: '#1e3f66' }} disabled={isLoading}>
                {isLoading ? 'Adding...' : 'Add Course Designer'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </ContentContainer>
    </AddCourseDesignerContainer>
  );
};

export default AddCourseDesigner;
