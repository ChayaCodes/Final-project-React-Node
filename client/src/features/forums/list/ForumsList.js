import React from 'react'
import './forumsList.css'
import Search from '../../../Components/dash/search/Search'
import { Link } from 'react-router-dom'
import { format } from 'date-fns';


function ForumsList() {

    const forums = [
        {
            "_id": "65bbcb7dfe37a61482ecda17",
            "name": "קבוצה כללית",
            "description": "פורום ייעודי לכל התלמידים שהשתתפו באחד הקורסים, הקבוצה נועדה לתמיכה\nושיתוף מקצועי, יש להגיב בכבוד ובצורה ראויה, הודעות שאינן הולמות ימחקו ללא\nהודעה מוקדמת. בהצלחה רבה\n\nהרשאות צפייה לשותפים בקורס בלבד",
            "threads": [
                "65c3ba65a4de64bd4d1c7c56",
                "65c8ac82e1e8eba09c2fb6e4",
                "65c8ad5f50b3a01ba6c1acf2",
                "65c8ae9550b3a01ba6c1acf6",
                "65c8af65bddd68a139590344",
                "65c8afc4d01f541ecfc1bc66",
                "65c8afeac51228e647d33522",
                "65c8b015120fc1b01905040c",
                "65c8b03398641f7e8f24832c",
                "65c8b05318b5f5dabdd82f87",
                "65c8b05818b5f5dabdd82f8b",
                "65c8c2f62ce75f6c33146ad9",
                "65c92ecaabe49d4e438150ac",
                "65c92eceabe49d4e438150b0",
                "65c92ed2abe49d4e438150b4",
                "65c92ed6abe49d4e438150b8"
            ],
            "public": true,
            "createdAt": "2024-02-01T16:49:01.776Z",
            "updatedAt": "2024-02-11T20:32:22.866Z",
            "__v": 16,
            "users": []
        },
        {
            "_id": "65bcdef3c50abd88970cbf10",
            "name": "שם קבוצה מספר 1",
            "description": ".......... פורום ייעודי לקבוצת\n\nפורום ייעודי לקבוצת קורס. פורום ייעודי\n.פורום ייעודי לקבוצת קורס ...\nפורום ייעודי\n\nפורום ייעודי לקבוצת קורס ..\nלקבוצת קורס ..\nקורס.\n\nהרשאות צפייה לשותפים בקורס בלבד",
            "threads": [
                "65c90297abe49d4e43814fd9",
                "65c9029cabe49d4e43814fdd"
            ],
            "public": true,
            "createdAt": "2024-02-02T12:24:19.801Z",
            "updatedAt": "2024-02-11T17:23:40.237Z",
            "__v": 2
        },
        {
            "_id": "65bcdf44c50abd88970cbf12",
            "name": "שם קבוצה מספר 2",
            "description": ".......... פורום ייעודי לקבוצת\n\nפורום ייעודי לקבוצת קורס. פורום ייעודי\n.פורום ייעודי לקבוצת קורס ...\nפורום ייעודי\n\nפורום ייעודי לקבוצת קורס ..\nלקבוצת קורס ..\nקורס.\n\nהרשאות צפייה לשותפים בקורס בלבד",
            "threads": [
                "65c3bac5a4de64bd4d1c7c5a"
            ],
            "public": false,
            "createdAt": "2024-02-02T12:25:40.482Z",
            "updatedAt": "2024-02-07T17:15:49.639Z",
            "__v": 1,
            "users": []
        }
    ]


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

                            <td>{format(new Date(forum.createdAt).toLocaleDateString('he-IL'), 'dd/MM/yyyy HH:mm', { timeZone })}</td>                
                            <td>
                                {forum.public ? 'ציבורי' : 'פרטי'}
                    
                            </td>
                            <td className='forum-list-table-link'>
                            <Link className='forum-list-link' to={`/dash/forums/${forum._id}/users`}>משתמשים</Link>
                            <Link className='forum-list-link' to={`/dash/forums/${forum._id}/treads`}>נושאים</Link>
                            </td>
                            <td className='forums-list-btns'>
                                <Link className='forums-list-btn edit' to={`/dash/forums/${forum._id}/edit`}>ערוך</Link>
                                <Link className='forums-list-btn delete' to={`/dash/forums/${forum._id}/delete`}>מחק</Link>
                                
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ForumsList