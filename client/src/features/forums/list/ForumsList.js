import React from 'react'
import './forumsList.css'
import Search from '../../../Components/dash/search/Search'
import { Link } from 'react-router-dom'
import { format } from 'date-fns';
import { useGetForumsQuery } from '../forumApiSlice';


function ForumsList() {

    const { data: forums, isError, error, isLoading } = useGetForumsQuery();
    if (isLoading) return <div>Loading...</div>
    if (isError) {
        console.log('error', error);
        return <div>{JSON.stringify(error)}</div>
    }


    const timeZone = 'Asia/Jerusalem';


    return (
        <div className='forums-list'>
            <div className='forum-list-top'>
                <Search placeholder='חפש פורום' />
                <Link to='/dash/forums/add' className='forums-list-add-btn'>פורום חדש</Link>
            </div>
            <table className='forums-list-table'>
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

                            <td>{format(new Date(forum.createdAt), 'dd/MM/yyyy HH:mm', { timeZone })}</td>                            <td>
                                {forum.public ? 'ציבורי' : 'פרטי'}

                            </td>
                            <td className='forums-list-btns'>
                                <Link className='forum-list-link' to={`/dash/forums/${forum._id}/users`}>משתמשים</Link>
                                <Link className='forum-list-link' to={`/dash/forums/${forum._id}/treads`}>נושאים</Link>
                            </td>
                            <td className='forums-list-btns'>
                                <Link className='forums-list-btn edit' to={`/dash/forums/${forum._id}/edit`}>ערוך</Link>
                                <span  className='forums-list-btn delete' to={`/dash/forums/${forum._id}/delete`}>מחק </span>

                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ForumsList