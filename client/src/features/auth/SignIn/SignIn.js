import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Link,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { useRegisterMutation } from '../authApiSlice';

import './signin.css';

const SignIn = () => {
  const [register, { isLoading, isError, error , isSuccess }] = useRegisterMutation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleRegister = (e) => {
    e.preventDefault();
    const user = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      userName: e.target.displayName.value,


  };

    register(user);
  };

  if (isLoading) return <div>loading...</div>;
  if (isError) {
    console.error('An error occurred:', error);
  }
  if (isSuccess) {
    navigate('/login');
  }

  return (
    <form className="signin-container" onSubmit={handleRegister}>
      <Typography variant="h4" className="signin-title">הרשמה</Typography>
      <div className="fields-row">
        <TextField className="signin-text-field half-width" required label="שם פרטי" variant="outlined" type="text" name="firstName" />
        <TextField className="signin-text-field half-width" required label="שם משפחה" variant="outlined" type="text" name="lastName" />
      </div>
      <TextField className="signin-text-field" required label="שם לתצוגה" variant="outlined" type="text" name="displayName" />
      <TextField className="signin-text-field" required label="כתובת אימייל" variant="outlined" type="email" name="email" />
      <TextField className="signin-text-field" required label="סיסמה" variant="outlined" type={showPassword ? 'text' : 'password'} name="password" InputProps={{ endAdornment: (<InputAdornment position="end"><IconButton onClick={handleShowPassword}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>), }} />
      <TextField className="signin-text-field" required label="אישור סיסמה" variant="outlined" type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" InputProps={{ endAdornment: (<InputAdornment position="end"><IconButton onClick={handleShowConfirmPassword}>{showConfirmPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>), }} />
      {isError && <div style={{ color: "red" }} className="signin-error">{error.data.message}</div>}
      <Button type="submit" variant="contained" color="primary" className="signin-button">הרשמה</Button>
      <Typography variant="body2" className="signin-link">כבר יש לך חשבון?  <Link href="/login">התחברות</Link></Typography>
    </form>
  );
}

export default SignIn;