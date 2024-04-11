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
import { useLoginMutation } from '../authApiSlice';

import './Login.css';

function Login() {
  const [login, {
    isLoading, isError, error,
  }] = useLoginMutation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    login(data);
    navigate('/personal-area');
  };

  if (isLoading) return <div>loading...</div>;
  if (isError) console.log(error);

  return (
    <form className="login-container" onSubmit={handleLogin}>
      <Typography variant="h4" className="login-title">
        התחברות
      </Typography>
      <TextField
        className="login-text-field"
        required
        label="שם משתמש או אימייל"
        variant="outlined"
        type="text"
        name="userName"
      />
      <TextField
        required
        label="סיסמא"
        variant="outlined"
        type={showPassword ? 'text' : 'password'}
        className="login-text-field"
        id="text-field"
        name="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {isError && <Typography variant="body2" className="login-error">{error.data.message}</Typography>}

      <Button type="submit" variant="contained" color="primary" className="login-button">
        התחברות
      </Button>

      <Typography variant="body2" className="login-link">
        אין לך חשבון?
        {' '}
        <Link href="/signup">הרשמה</Link>
      </Typography>
    </form>

  );
}

export default Login;
