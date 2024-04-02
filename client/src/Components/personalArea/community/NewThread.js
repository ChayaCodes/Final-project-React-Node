import React, { useRef } from 'react';

import { TextField, Button, FormGroup } from '@mui/material';
import { useParams } from 'react-router';
import { useCreateThreadMutation } from '../../../app/treads/treadsApiSlice';

function NewThread() {
  const [createThread, {
    data, isLoading, isError, isSuccess, error,
  }] = useCreateThreadMutation();

  const titleRef = useRef();
  const contentRef = useRef();
  const forumId = useParams().id;

  const handleNewThread = async (event) => {
    event.preventDefault();
    console.log('handleNewThread');
    try {
      const body = {
        title: titleRef.current.value,
        description: contentRef.current.value,
        forum: forumId,
      };

      console.log(body);

      await createThread(body).unwrap();
      console.log(data);
    } catch (error) {
      console.error('Failed to create the thread: ', error);
    }
  };

  return (
    <form onSubmit={handleNewThread}>
      <TextField placeholder="כותרת הנושא" inputRef={titleRef} />
      <TextField placeholder="תוכן הנושא" inputRef={contentRef} />
      <Button onClick={handleNewThread} type="submit">צור נושא חדש</Button>
    </form>
  );
}

export default NewThread;
