import { useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useGetThreadsQuery } from '../../../app/treads/treadsApiSlice';
import ThreadBox from './ThreadBox';

function Treads() {
  const { id: forumId } = useParams();
  console.log(forumId);
  const {
    data: threads, isLoading, isError, isSuccess, error,
  } = useGetThreadsQuery(forumId);

  if (isLoading) {
    return <div>Loading...</div>;
  } if (isError) {
    console.log(error);
    return <div style={{ color: 'red' }}>{error && <div>{error.message}</div>}</div>;
  } if (isSuccess) {
    console.log(threads);

    return (
      <Box>
        <Button onClick={() => { window.location.href = `/personal-area/community/${forumId}/new-thread`; }}>פתיחת נושא חדש</Button>
        {
                threads.map((thread) => <ThreadBox thread={thread} />)

                // threads.map((thread) => {
                //     return (
                //         <Box  style={{ padding: "1rem", margin: "1rem", display: "flex", flexDirection: "row", justifyContent: "space-between" }}
                //         onClick={() => { window.location.href = `/personal-area/community/${forumId}/${thread._id}` }}>
                //             <Typography>{thread.title}</Typography>
                //             <Box>
                //                 <Typography>{new Date(thread.createdAt).toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })}</Typography>
                //             </Box>
                //         </Box>
                //     )
                // })

            }

      </Box>
    );
  }
}

export default Treads;
