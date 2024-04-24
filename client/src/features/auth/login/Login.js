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

const Login = () => {
  const [login, {
    isLoading, isError, error, isSuccess,
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
  };

  if (isLoading) return <div>loading...</div>;
  if (isError) console.log("errlogin", error);
  if (isSuccess) navigate('/personal-area');
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
      {isError && <div style={{ color: "red" }} variant="body2" className="login-error">{error.data.message}</div>}

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
