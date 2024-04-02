import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useGetPostsQuery, useCreatePostMutation } from '../../../app/posts/postsApiSlice';

function Thread() {
  const { threadId, id: forumId } = useParams();

  const {
    data, error, isLoading, isSuccess, isError,
  } = useGetPostsQuery(threadId);

  const [createPost, { isSuccess: isCreatePostSuccess }] = useCreatePostMutation();
  const [postContent, setPostContent] = useState('');

  const handleAddPost = async () => {
    if (postContent) {
      try {
        const body = {
          content: postContent,
          thread: threadId,
          forum: forumId,
        };

        await createPost(body).unwrap();
        setPostContent('');
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
  };
  if (isCreatePostSuccess) {
    window.location.reload();
  }

  if (isLoading) {
    return <div>Loading...</div>;
  } if (isError) {
    console.log(error);
    return <div style={{ color: 'red' }}>{error && <div>{error.message}</div>}</div>;
  } if (isSuccess) {
    console.log(data);
    return (
      <div>
        {
                data.map((post) => {
                  if (!post) return null;
                  return (
                    <div key={post.id}>
                      <p>{post.content}</p>
                    </div>
                  );
                })
            }
        <input type="text" value={postContent} onChange={(e) => setPostContent(e.target.value)} />
        <Button onClick={handleAddPost}>הוספת תגובה</Button>
      </div>
    );
  }
}

export default Thread;
