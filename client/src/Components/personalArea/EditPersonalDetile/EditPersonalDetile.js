import React, { useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';
import { useGetMeQuery, useEditMeMutation } from '../../../features/me/meApiSlice';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useLoginMutation, useLogoutMutation } from '../../../features/auth/authApiSlice';
import UploadImage from './UploadImage/UploadImage';

const EditPersonalDetails = () => {
    const { data: user, isSuccess: isGetMeSuccess } = useGetMeQuery();
    const [editMe, { data:resEdit, isSuccess: isEditMeSuccess, isError: isEditMeError, error: editMeError, isLoading: isLoadingEditMe }] = useEditMeMutation();
    const [userData, setUserData] = useState();
    const [login, { isError: isLoginError, error: loginError }] = useLoginMutation();
    const [logout, { isError: isLogoutError, error: logoutError }] = useLogoutMutation();
    const [validationMessage, setValidationMessage] = useState('');

    function validateForm() {
        setValidationMessage('');
        if(!userData) return false;
        // בדיקה אם כל השדות החובה מלאים (הנחה שיש שדה חובה אחד או יותר)
        if (!userData.password || userData.password.trim() === '') {
            console.log("userData.password:", userData.password)
            setValidationMessage("יש למלא את כל השדות החובה.");
            return false;
        }
    
        // בדיקה אם הסיסמאות תואמות, במידה והשדה של הסיסמה החדשה לא ריק
        if (userData.newPassword && userData.newPassword !== userData.confirmNewPassword) {
            setValidationMessage("הסיסמאות אינן תואמות.");
            return false;
        }
    
        // אם הגענו לכאן, הטופס תקין
        return true;
    }

    useEffect(() => {
        if (isGetMeSuccess) {
            setUserData(user);
        }
    }, [isGetMeSuccess]);

    const handleEditMe = async () => {
        if (validateForm()) {
            await editMe(userData);
        }
    }

    useEffect(() => {
        if (isEditMeSuccess) {
            console.log("resEdit", resEdit )
            const password = userData.newPassword ? userData.newPassword : userData.password;
            console.log("login", userData.userName, password);
            login({ userName: userData.userName, password: password });
        }
        if (isEditMeError) {
            console.log("edit error", editMeError);
            setValidationMessage(editMeError.data.message);
        }
    }, [isEditMeSuccess]);

    return (
        <Container maxWidth="sm">
        <UploadImage initialImage={userData? userData : null}/> 
            <Box component="form" noValidate autoComplete="off">
                <Typography variant="h5" align="center" gutterBottom>
                    עריכת פרטים אישיים
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            value={userData?.firstName || ''}
                            onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                            fullWidth
                            id="firstName"
                            label="שם פרטי"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="lastName"
                            label="שם משפחה"
                            variant="outlined"
                            value={userData?.lastName || ''}
                            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="username"
                            label="שם משתמש"
                            variant="outlined"
                            value={userData?.userName || ''}
                            onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="email"
                            label="כתובת אימייל"
                            variant="outlined"
                            value={userData?.email || ''}
                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" align="left" gutterBottom>
                            שינוי סיסמא
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="password"
                            id="password"
                            label="סיסמא נוכחית"
                            variant="outlined"
                            required
                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="password"
                            id="confirmPassword"
                            label="סיסמא חדשה (במידה ולא תרצה/י לשנות יש להשאיר ריק)"
                            variant="outlined"
                            onChange={(e) => setUserData({ ...userData, newPassword: e.target.value })}

                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="comments"
                            label="יש לאשר את הסיסמא החדשה"
                            variant="outlined"
                            onChange={(e) => setUserData({ ...userData, confirmNewPassword: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <div className='error' style={{ color: 'red' }}>
                            {isEditMeError && editMeError.message}
                            {isLoginError && loginError.message}
                            {isLogoutError && logoutError.message}
                            {validationMessage}

                        </div>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={handleEditMe}
                        >
                            {
                                isLoadingEditMe ? <span><CircularProgress size={20} /> מעדכן</span> : 'שמירת שינויים'
                            }
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default EditPersonalDetails;
