import { Link } from 'react-router-dom';
import { useGetUsersQuery, useDeleteUserMutation } from '../userApiSlice';
import Search from '../../../Components/dash/search/Search';
import './usersList.css';

function UsersList() {
  const {
    data: users, isError, error, isLoading,
  } = useGetUsersQuery();

  const [deleteUser, { }] = useDeleteUserMutation();

  const handleDelete = (e) => {
    const userId = e.target.id;
    deleteUser(userId);
    console.log('delete', userId);
  };
  if (isLoading) {
    console.log('loading...');
    return <div>Loading...</div>;
  }
  if (isError) {
    console.log('error', error);
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <div className="users-list">
      <div className="users-list-top">
        <Search placeholder="חפש משתמש" />
        <Link to="/dash/userss/add" className="forums-list-add-btn">משתמש חדש</Link>
      </div>
      <table className="users-list-table">
        <thead>

          <tr>
            <th>שם משתמש</th>
            <th>שם אמיתי</th>
            <th>אימייל</th>
            <th>הגדרות</th>
            <th>פעולות</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.userName}</td>
              <td>
                {user.firstName}
                {' '}
                {user.lastName}
              </td>
              <td>{user.email}</td>

              <td>
                {user.role}
              </td>

              <td className="users-list-btns">
                <Link className="users-list-btn edit" to={`/dash/users/${user._id}/edit`}>ערוך</Link>
                <span className="users-list-btn delete" onClick={handleDelete} id={user._id}>מחק</span>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default UsersList;
