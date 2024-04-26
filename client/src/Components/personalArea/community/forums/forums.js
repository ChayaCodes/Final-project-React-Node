import { useGetForumsQuery } from '../../../../features/forums/forumApiSliceUser';
import SortBy from '../../SortBy/SortBy';
import Search from '../../search/Search';
import ComunityHeader from '../ComunityHeader/ComunityHeader';
import ForumBox from '../forumBox/ForumBox';
import './forums.css';

function Forums() {
  const {
    data: forums, isLoading, isError, isSuccess, error,
  } = useGetForumsQuery();
  console.log('Forums', forums);

  if (isLoading) {
    return <div>Loading...</div>;
  } if (isError) {
    console.log('isError: ');
    console.log(error);
    return <div style={{ color: 'red' }}>{error && <div>{error.message}</div>}</div>;
  } if (isSuccess) {
    console.log(forums);
    return <div className="forums-container">
      <ComunityHeader placeholder="חפש פורום" />
      <div className="forums">
        {forums.map((forum) => (<ForumBox key={forum.id} forum={forum} />))}
      </div>
    </div>
  }
}

export default Forums;
