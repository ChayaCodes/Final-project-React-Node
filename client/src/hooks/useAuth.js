import {jwtDecode} from 'jwt-decode';
import { selectToken } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setToken } from '../features/auth/authSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  try {
    const token = localStorage.getItem('token');


    if (token) {
      console.log("success token found in useAuth");
      console.log(token); 
      const userDecoded = jwtDecode(token);
      dispatch(setToken({ token: token, user: userDecoded }));
      console.log(userDecoded);
      return userDecoded;
    }
    return null;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}
export default useAuth;
