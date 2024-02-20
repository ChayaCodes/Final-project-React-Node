
import { useDispatch } from 'react-redux';
import { useGetUserQuery } from '../../app/user/userApiSlice';
import { IconButton, Link } from '@mui/material';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import apiSlice from '../../app/apiSlice';
import { removeToken } from '../../app/auth/authSlice';
import { faArrowLeft, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
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
        return <div>Loading...</div>
    }
    if (isError) {
        <div>
            return <div style={{ color: "red" }}>{error.data}</div>
        </div>
    }
    if (isSuccess) {
        return (
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Typography variant='h2' weight='700' style={{ color: "black" , fontWeight: "700", fontSize: "40px", padding: "10px"}}
                >{`שלום ${user.userName}!`}</Typography>
                <Box>
                    <Link to="/personal-area/edit" style={{ color: "black", padding: "10px" }}>
                        <FontAwesomeIcon icon={faPencil} />
                        <span>עריכת פרטים אישיים</span>
                    </Link>
                    <Link onClick={onLogout} style={{ color: "gray", padding: "10px" }}
                    ><FontAwesomeIcon icon={faRightFromBracket} />
                        <span>התנתקות</span>
                    </Link>
                </Box>
            </div>
        )
    }

}



export default PersonalArea