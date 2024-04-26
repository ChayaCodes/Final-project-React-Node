import React from 'react';
import './forumsList.css';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Search from '../../../Components/dash/search/Search';
import { useGetForumsQuery, useDeleteForumMutation } from '../forumApiSlice';

function ForumsList() {
  const {
    data: forums, isError, error, isLoading,
  } = useGetForumsQuery();
  const [deleteForum, {
    data, isError: deleteError, error: deleteErrorData, isLoading: deleteLoading, isSuccess: deleteSuccess,
  }] = useDeleteForumMutation();
  if (isLoading) {
    console.log('loading...');
    return <div>Loading...</div>;
  }
  if (isError) {
    console.log('error', error);
    return <div>{JSON.stringify(error)}</div>;
  }

  const handleDelete = (e) => {
    const forumId = e.target.id;
    deleteForum(forumId);
    console.log('delete', forumId);
  };

  const timeZone = 'Asia/Jerusalem';
  console.log('forums');
  console.log(forums[0]);
  return (
    <div className="forums-list">
      <div className="forum-list-top">
        <Search placeholder="חפש פורום" />
        <Link to="/dash/forums/add" className="forums-list-add-btn">פורום חדש</Link>
      </div>
      <table className="forums-list-table">
        <thead>

          <tr>
            <th>שם הפורום</th>
            <th>תיאור</th>
            <th>נוצר בתאריך</th>
            <th>הגדרות</th>
            <th>ניהול</th>
            <th>פעולות</th>
          </tr>
        </thead>
        <tbody>
          {forums.map((forum) => (
            <tr key={forum._id}>
              <td>{forum.name}</td>
              <td>{forum.description}</td>

              <td>{forum.createdAt}</td>
              {' '}
              <td>
                {forum.public ? 'ציבורי' : 'פרטי'}

              </td>
              <td className="forums-list-btns">
                <Link className="forum-list-link" to={`/dash/forums/${forum._id}/users`}>משתמשים</Link>
                <Link className="forum-list-link" to={`/dash/forums/${forum._id}/threads`}>נושאים</Link>
              </td>
              <td className="forums-list-btns">
                <Link className="forums-list-btn edit" to={`/dash/forums/${forum._id}/edit`}>ערוך</Link>
                <span className="forums-list-btn delete" to={`/dash/forums/${forum._id}/delete`} onClick={handleDelete} id={forum._id}>מחק</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ForumsList;
