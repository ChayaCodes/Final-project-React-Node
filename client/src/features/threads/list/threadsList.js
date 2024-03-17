import React from 'react'
import './threadsList.css'
import Search from '../../../Components/dash/search/Search'
import { Link } from 'react-router-dom'
import { format } from 'date-fns';
import { useGetThreadsQuery, useDeleteThreadMutation } from '../threadApiSlice';


function ThreadsList() {

    const { data: threads, isError, error, isLoading } = useGetThreadsQuery();
    const [deleteThread, {}] = useDeleteThreadMutation();
    if (isLoading) {
        console.log('loading...');
        return <div>Loading...</div>
    }
    if (isError) {
        console.log('error', error);
        return <div>{JSON.stringify(error)}</div>
    }

    const handleDelete = (e) => {
        const ThreadId = e.target.id;
        deleteThread(ThreadId);
        console.log('delete', ThreadId);

    }




    const timeZone = 'Asia/Jerusalem';



    return (
        <div className='threads-list'>
            <div className='thread-list-top'>
                <Search placeholder='חפש פורום' />
                <Link to='/dash/threads/add' className='threads-list-add-btn'>פורום חדש</Link>
            </div>
            <table className='threads-list-table'>
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
                    {threads.map((thread) => (
                        <tr key={thread._id}>
                            <td>{thread.name}</td>
                            <td>{thread.description}</td>

                            <td>{format(new Date(thread.createdAt), 'dd/MM/yyyy HH:mm', { timeZone })}</td>                            <td>
                                {thread.public ? 'ציבורי' : 'פרטי'}

                            </td>
                            <td className='threads-list-btns'>
                                <Link className='thread-list-link' to={`/dash/threads/${thread._id}/users`}>משתמשים</Link>
                                <Link className='thread-list-link' to={`/dash/threads/${thread._id}/treads`}>נושאים</Link>
                            </td>
                            <td className='threads-list-btns'>
                                <Link className='threads-list-btn edit' to={`/dash/Threads/${thread._id}/edit`}>ערוך</Link>
                                <span className='threads-list-btn delete' to={`/dash/Threads/${thread._id}/delete`} onClick={handleDelete} id={thread._id}>מחק</span>

                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ThreadsList