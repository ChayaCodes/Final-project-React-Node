import React, { useEffect, useState } from "react";
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
import { useLoginMutation } from "../../app/auth/authApiSlice";
import { setToken } from "../../app/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loginFunc, { isError, error, isSuccess, data }] = useLoginMutation();

    useEffect(() => {
        if (isSuccess) {
            console.log("user", data.user);
            dispatch(setToken({ token: data.accessToken , user: data.user}));
            // dispatch(setUser(data.user));
            navigate("/personal-area");
        }
        if (isError) {
            console.log(error);
        }
    }, [isSuccess, isError]);

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
        <Box sx={{ width: "100%", maxWidth: 400, margin: "auto", marginTop: 8, height: "60vh" }}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
                התחברות
            </Typography>
            <div dir="rtl">
                <TextField
                    required
                    label="אימייל"
                    value={email}
                    sx={{
                        width: "100%", marginTop: 2,
                        textAlign: "right",

                        backgroundColor: "white"
                    }}
                    variant="outlined"
                    onChange={handleEmailChange}
                    type="email"


                />
            </div>
            <TextField
                required
                label="סיסמא"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                sx={{ width: "100%", marginTop: 2, backgroundColor: "white" }}
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

            
            <Button variant="contained" color="primary" sx={{ width: "100%", marginTop: 2 }} onClick={() => loginFunc({ userName: email, password })}>
                התחברות
            </Button>

            <Typography variant="body2" sx={{ textAlign: "center", marginTop: 2 }}>
                אין לך חשבון? <Link href="/signup">הרשמה</Link>
            </Typography>
        </Box>




    );
};

export default Login;
