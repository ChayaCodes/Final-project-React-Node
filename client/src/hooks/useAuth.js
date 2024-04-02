import jwtDecode from 'jwt-decode';
import { selectToken } from '../features/auth/authSlice';

const useAuth = () => {
  const token = selectToken();
  if (token) {
    const userDecoded = jwtDecode(token);
    console.log(userDecoded);
    return userDecoded;
  }
  return { userName: 'אורח', role: 'guest', forums: [] };
};

export default useAuth;
