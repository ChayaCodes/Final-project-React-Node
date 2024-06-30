import React from 'react';
import { TextField, Button, Box, Card, CardContent } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router';
import { useCreateThreadMutation } from '../../../../features/forums/forumApiSliceUser';
import Editor from '../Editor/Editor';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function NewThread() {
  const navigate = useNavigate();
  const [createThread, {
    data, isLoading, isError, isSuccess, error,
  }] = useCreateThreadMutation();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const forumId = useParams().id;

  const handleNewThread = async (event) => {
    event.preventDefault();
    try {
      const body = {
        title: title,
        description: content,
        forum: forumId,
        
      };

      const response = await createThread(body)
      console.log('response', response);
      console.log('response.data', response?.data);
      console.log('response.data.thread', response?.data?.thread);
      console.log('response.data.thread._id', response?.data?.thread?._id);

      navigate(`/personal-area/community/${forumId}/${response?.data?.thread?._id}`);
    } catch (error) {
      console.error('Failed to create the thread: ', error);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      <h1 style={{ textAlign: 'center' }}> פתיחת נושא חדש </h1>
  
      <form 
        onSubmit={handleNewThread} 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '20px',
          maxWidth: '600px',
          width: '100%',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxSizing: 'border-box',
        }}
      >
  
        <input
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          placeholder='הכנס את הכותרת לנושא החדש'
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '100%',
            boxSizing: 'border-box',
          }}
        />
  
        <Editor value={content} setValue={setContent} />
  
        <button 
          type="submit" 
          onClick={handleNewThread}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#3f51b5',
            color: '#fff',
            cursor: 'pointer',
            marginTop: '50px',
            height: '50px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          שליחה
        </button>
      </form>
  
      
    </div>
    
  );
}

export default NewThread;