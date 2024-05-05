import React from 'react';
import { TextField, Button, Box, Card, CardContent } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router';
import { useCreateThreadMutation } from '../../../../app/treads/treadsApiSlice';
import Editor from '../Editor/Editor';
import { useState } from 'react';

function NewThread() {
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

      await createThread(body).unwrap();
    } catch (error) {
      console.error('Failed to create the thread: ', error);
    }
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Box 
          component="form" 
          onSubmit={handleNewThread} 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px',
          }}
        >
          <TextField 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            label="Title" 
            variant="outlined" 
            fullWidth
          />
          <Editor value={content} setValue={setContent} />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            startIcon={<SendIcon />}
            disabled={isLoading}
          >
            Send
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default NewThread;