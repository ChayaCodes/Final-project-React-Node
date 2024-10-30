import { useGetForumsQuery } from '../../../../features/forums/forumApiSliceUser';
import SortBy from '../../SortBy/SortBy';
import Search from '../../search/Search';
import ComunityHeader from '../ComunityHeader/ComunityHeader';
import ForumBox from '../forumBox/ForumBox';
import './forums.css';
import { useEffect, useState } from 'react';


function Forums() {
  const {
    data: forums, isLoading, isError, isSuccess, error,
  } = useGetForumsQuery();

  const [forumsList, setForumsList] = useState(forums);

  const onChangeSearch = (e) => {
    const search = e.target.value;
    const filteredForums = forums.filter((forum) => forum.name.includes(search));
    setForumsList(filteredForums);
  }

  const onChangeSortBy = (e) => {
    const sortBy = e.target.value;
    const forumCopy = [...forumsList]
    if (sortBy === 'name') {
      const sortedForums = forumCopy.sort((a, b) => a.name.localeCompare(b.name,));
      setForumsList(sortedForums);
    } else if (sortBy === 'date') {
      const sortedForums = forumCopy.sort((a, b) => new Date(b.lastPost.date) - new Date(a.lastPost.date));
      setForumsList(sortedForums);
    }
  }
    useEffect(() => {
    if (isSuccess)
      setForumsList(forums);
  }, [isSuccess]);

  if (isLoading) {
    return <div>Loading...</div>;
  } if (isError) {
    console.error('An error occurred:', error);
    return <div style={{ color: 'red' }}>{error && <div>{error.message}</div>}</div>;
  } if (isSuccess) {
    return <div className="forums-container">
      <ComunityHeader placeholder="חפש פורום" onChangeSearch={onChangeSearch} onChangeSortBy={onChangeSortBy} sortByOptions={['name', 'date']} />
      <div className="forums">
        {forumsList && forumsList.map((forum) => (<ForumBox key={forum.id} forum={forum} />))}
      </div>
    </div>
  }
}

export default Forums;
