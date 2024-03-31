
import { useDispatch } from 'react-redux';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import {useLogoutMutation} from '../../features/auth/authApiSlice';
import { removeToken } from '../../app/auth/authSlice';
import { Box , Link } from '@mui/material';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';



const PersonalArea = () => {
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();
    const onLogout = () => {
        logout();
        navigate("/");
    }

    const user = useSelector((state) => state.auth.user);
    const userName = user ? user.userName : "אורח";


        return (
            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Typography variant='h2' weight='700' style={{ color: "black" , fontWeight: "700", fontSize: "40px", padding: "10px"}}
                >{`שלום ${userName}!`}</Typography>
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





export default PersonalArea