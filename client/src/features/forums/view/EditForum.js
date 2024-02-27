import "./edit-forum.css"
import { useGetForumsQuery } from "../forumApiSlice";
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const EditForum = () => {
  const [forum, setForum] = useState({});
  const { data: forums, isError, error, isLoading, isSuccess } = useGetForumsQuery();
  const forumId = useParams().id;
  const [changed, setChanged] = useState(false);
  
  
  const nameRef = useRef(forum.name);
  const descriptionRef = useRef(forum.description);
  const publicRef = useRef(forum.public);


  useEffect(() => {
    if (isSuccess) {
      const forum = forums.find(forum => forum._id === forumId);
      setForum(forum);
    }
  }, [isSuccess])

  if (isLoading) {
    console.log('loading...');
    return <div>Loading...</div>
  }
  if (isError) {
    console.log('error', error);
    return <div>{JSON.stringify(error)}</div>
  }

  return (
    <div className='edit-forum-container'>
      <form className='edit-forum-form'>
        <input type='text' placeholder='שם הפורום' className='edit-forum-input' required name='name' defaultValue={forum.name} ref={nameRef} onChange={() => setChanged(true)} />
        <textarea placeholder='תיאור הפורום' className='edit-forum-textarea' required name='description' defaultValue={forum.description} ref={descriptionRef} onChange={() => setChanged(true)} />
        <div className='edit-forum-checkbox'>
          <input type='checkbox' name='public' id='public' ref={publicRef} defaultChecked={forum.public} onChange={() => setChanged(true)} />
          <label htmlFor='public'> ציבורי</label>
        </div>
        <button  className={`${changed ? 'edit-forum-submit' : 'edit-forum-submit-disabled'}`} disabled={!changed}>עדכן פורום </button>
      </form>
    </div>
  )
}

export default EditForum