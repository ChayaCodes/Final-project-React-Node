import React, { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Link,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box sx={{ width: 400, margin: "auto", marginTop: 10 }}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
                התחברות
            </Typography>
    <div dir="rtl">
      <TextField
        required
        label="אימייל"
        value={email}
        sx={{ width: "100%", marginTop: 2 }}
        variant="outlined"
      />
    </div>
            <TextField
                required
                label="סיסמא"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                sx={{ width: "100%", marginTop: 2 }}
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
            <Button variant="contained" color="primary" sx={{ width: "100%", marginTop: 2 }}>
                התחברות
            </Button>

            <Typography variant="body2" sx={{ textAlign: "center", marginTop: 2 }}>
                אין לך חשבון? <Link href="/signup">הרשמה</Link>
            </Typography>
        </Box>
    );
};

export default Login;
