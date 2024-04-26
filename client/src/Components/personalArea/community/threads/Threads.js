import { useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useGetForumQuery } from '../../../../features/forums/forumApiSliceUser';
import ThreadBox from '../threadBox/ThreadBox';

function Threads() {
  const { id: forumId } = useParams();
  const {
    data, isLoading, isError, isSuccess, error,
  } = useGetForumQuery(forumId);

  if (isLoading) {
    return <div>Loading...</div>;
  } if (isError) {
    return <div style={{ color: 'red' }}>{error && <div>{error.message}</div>}</div>;
  } if (isSuccess) {
    console.log(data);

    return (
      <Box>
        <Button onClick={() => { window.location.href = `/personal-area/community/${forumId}/new-thread`; }}>פתיחת נושא חדש</Button>
        {
                data.threads.map((thread) => <ThreadBox thread={thread} />)

            }

      </Box>
    );
  }
}

export default Threads;
