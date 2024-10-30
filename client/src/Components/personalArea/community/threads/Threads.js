import { useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useGetForumQuery } from '../../../../features/forums/forumApiSliceUser';
import ThreadBox from '../threadBox/ThreadBox';
import ComunityHeader from '../ComunityHeader/ComunityHeader';
import { useEffect } from 'react';
import { useState } from 'react';

function Threads() {
  const { id: forumId } = useParams();
  const {
    data, isLoading, isError, isSuccess, error,
  } = useGetForumQuery(forumId);

  const [threadsList, setThreadsList] = useState(null);

  useEffect(() => {
    if (isSuccess)
      setThreadsList(data.threads);
  }, [isSuccess]);

  const onChangeSearch = (e) => {
    const search = e.target.value;
    const filteredThreads = data.threads.filter((thread) => thread.title.includes(search));
    setThreadsList(filteredThreads);
  }

  const onChangeSortBy = (e) => {
    const sortBy = e.target.value;
    const threadsCopy = [...threadsList]
    if (sortBy === 'title') {
      const sortedThreads = threadsCopy.sort((a, b) => {
         return a.title.localeCompare(b.title)
        });
      setThreadsList(sortedThreads);
    } else if (sortBy === 'date') {
      const sortedThreads = threadsCopy.sort((a, b) => new Date(b.date) - new Date(a.date));
      setThreadsList(sortedThreads);
    }
  }


  if (isLoading) {
    return <div>Loading...</div>;
  } if (isError) {
    return <div style={{ color: 'red' }}>{error && <div>{error.message}</div>}</div>;
  } if (isSuccess) {
    return (
      <Box>
        <Button onClick={() => { window.location.href = `/personal-area/community/${forumId}/new-thread`; }}>פתיחת נושא חדש</Button>
        <ComunityHeader placeholder="חיפוש נושא" onChangeSearch={onChangeSearch} onChangeSortBy={onChangeSortBy} sortByOptions={['title', 'date']} />
        

                {threadsList &&  threadsList.map((thread) => <ThreadBox thread={thread} />)}
                { (!threadsList || threadsList.length === 0) &&
                 <div style={{textAlign: 'center'}}>
                  <h2>אין עדיין נושאים בפורום "{data.name}"</h2>
                  <Button onClick={() => { window.location.href = `/personal-area/community/${forumId}/new-thread`; }}>פתיחת נושא חדש</Button>
                </div>}
        
      </Box>
    );
  }
}

export default Threads;
