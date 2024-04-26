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
      const userDecoded = jwtDecode(token);
      dispatch(setToken({ token: token, user: userDecoded }));
      return userDecoded;
    }
    return null;
  }
  catch (error) {
    return null;
  }
}
export default useAuth;
