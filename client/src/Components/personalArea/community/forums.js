import { Box } from '@mui/material';
import { useGetForumsQuery } from '../../../features/forums/forumApiSlice';
import ForumBox from './forumBox/ForumBox';

function Forums() {
  const {
    data: forums, isLoading, isError, isSuccess, error,
  } = useGetForumsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  } if (isError) {
    console.log('isError: ');
    console.log(error);
    return <div style={{ color: 'red' }}>{error && <div>{error.message}</div>}</div>;
  } if (isSuccess) {
    console.log(forums);

    return (
      <Box>
        {forums.map((forum) => <ForumBox forum={forum} />)}
      </Box>
    );
  }
}

export default Forums;
