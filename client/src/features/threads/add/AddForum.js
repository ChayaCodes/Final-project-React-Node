import './add-forum.css';
import { useEffect, useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { useAddForumMutation } from '../threadApiSlice';

function AddForum() {
  const [addForum, {
    data, isError, error, isLoading, isSuccess,
  }] = useAddForumMutation();
  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const publicRef = useRef(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      public: publicRef.current.checked,
    };
    addForum(data);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/dash/forums');
    }
    if (isError) {
      console.error('An error occurred while adding forum:', error)
    }
  });

  return (
    <div className="add-forum-container">
      <form className="add-forum-form">
        {isError && <div color="red">{JSON.stringify(error.message || error.data.message)}</div>}
        <input type="text" placeholder="שם הפורום" className="add-forum-input" required name="name" ref={nameRef} />
        <textarea placeholder="תיאור הפורום" className="add-forum-textarea" required name="description" ref={descriptionRef} />
        <div className="add-forum-checkbox">
          <input type="checkbox" name="public" id="public" ref={publicRef} />
          <label htmlFor="public"> ציבורי</label>
        </div>
        <button className="add-forum-submit" onClick={handleSubmit}>
          {isLoading && <CircularProgress size={20} color="inherit" />}
          הוסף פורום
          {' '}
        </button>
      </form>

    </div>
  );
}

export default AddForum;
