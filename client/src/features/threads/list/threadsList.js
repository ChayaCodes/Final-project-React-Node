import React from 'react';
import './threadsList.css';
import { Link, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import Search from '../../../Components/dash/search/Search';
import {
  useGetForumThreadsQuery, useDeleteThreadMutation, useUpdateThreadMutation, useGetThreadsQuery,
} from '../threadApiSlice';
import { useGetForumsQuery } from '../../forums/forumApiSlice';

function ThreadsList() {
  const { id: forumId } = useParams();
  let threadsQuery;

  if (forumId) {
    threadsQuery = useGetForumThreadsQuery;
  } else {
    threadsQuery = useGetThreadsQuery;
  }

  const {
    data: threads, isError, error, isLoading,
  } = threadsQuery(forumId);

  const [deleteThread, {}] = useDeleteThreadMutation();
  const [updateThread, {}] = useUpdateThreadMutation();

  const { data: forums } = useGetForumsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    console.error('An error occurred while fetching threads:', error);
    return <div>{JSON.stringify(error)}</div>;
  }

  const handleDelete = (e) => {
    const ThreadId = e.target.id;
    deleteThread(ThreadId);
  };

  const handleSticky = (e) => {
    const ThreadId = e.target.id;
    const thread = threads.find((thread) => thread._id === ThreadId);
    const updatedThread = { ...thread, stiky: !thread.stiky };

    updateThread(updatedThread);
  };

  const handleToggleOpen = (e) => {
    const ThreadId = e.target.id;
    const thread = threads.find((thread) => thread._id === ThreadId);
    const updatedThread = { ...thread, open: !thread.open };
    updateThread(updatedThread);
  };

  const timeZone = 'Asia/Jerusalem';

  // get the title of the forum
  const forum = forums ? forums.find((forum) => forum._id === forumId) : null;
  const forumTitle = forum.name;

  return (
    <div className="threads-list">

      <div className="thread-list-top">
        <Search placeholder="חפש נושא" />
        <Link to="/dash/threads/add" className="threads-list-add-btn">נושא חדש</Link>
      </div>
      {forumId && (
      <h2>
        נושאים בפורום
        {forumTitle}
      </h2>
      )}
      <table className="threads-list-table">
        <thead>

          <tr>
            <th>שם הנושא</th>
            <th>תיאור</th>
            <th>משתמש</th>
            <th>נוצר בתאריך</th>
            <th>הגדרות</th>
            <th>פעולות</th>
          </tr>
        </thead>
        <tbody>
          {threads.map((thread) => (
            <tr key={thread._id}>
              <td>{thread.title}</td>
              <td>{thread.description}</td>
              <td>{thread.user.userName}</td>

              <td>{format(new Date(thread.createdAt), 'dd/MM/yyyy HH:mm', { timeZone })}</td>
              <td>
                {thread.public ? ' ציבורי' : ' פרטי'}

                {thread.stiky ? ' נעוץ' : ''}
                {thread.open ? ' פתוח' : ' סגור'}

              </td>

              <td className="threads-list-btns">
                <Link className="threads-list-btn edit" to={`/dash/Threads/${thread._id}/edit`}>ערוך</Link>
                <span className="threads-list-btn delete" onClick={handleDelete} id={thread._id}>מחק</span>

              </td>
              <td className="threads-list-btns">
                <span className="threads-list-btn sticky" onClick={handleSticky} id={thread._id}>נעץ</span>
                <span className="threads-list-btn toggleOpen" onClick={handleToggleOpen} id={thread._id}>{thread.open ? 'נעל' : 'פתח'}</span>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ThreadsList;
