
import { useDispatch, useSelector } from 'react-redux';
import { useGetUserQuery } from '../redux/userApiSlice';
import { IconButton, Link } from '@mui/material';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import apiSlice from '../redux/apiSlice';
import { removeToken } from '../redux/authSlice';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@mui/material';



const PersonalArea = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(removeToken());
        localStorage.removeItem("token");
        dispatch(apiSlice.util.resetApiState());
        navigate("/");
    }

    const { data: user, isLoading, isError, isSuccess, error } = useGetUserQuery();


    if (isLoading) {
        console.log("loading");
        return <div>Loading...</div>
    }
    if (isError) {
        <div>
            return <div style={{ color: "red" }}>{error.data}</div>
        </div>
    }
    if (isSuccess) {
        return (
            <div>
                <Typography variant='h2'>{`שלום ${user.userName}!`}</Typography>
                <Box>
                    <IconButton href="/personal-area/edit"><FontAwesomeIcon icon={faPencil} />עריכת פרטים אישיים</IconButton>
                    <IconButton onClick={onLogout}><FontAwesomeIcon icon={faArrowLeft} />התנתקות</IconButton>
                </Box>
            </div>
        )
    }

}



export default PersonalArea