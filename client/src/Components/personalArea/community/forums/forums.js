import { useGetForumsQuery } from '../../../../features/forums/forumApiSlice';
import SortBy from '../../SortBy/SortBy';
import Search from '../../search/Search';
import './forums.css';

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
    return <div>
      <div className="forums-header">
        <Search placeholder="חפש פורום" />
        <SortBy />

      </div>

      <table>
        {
          forums.map((forum) => (
            <tr key={forum._id}>
              <td>{forum.name}</td>
              <td>{forum.description}</td>
            </tr>
          ))
        }
      </table>

    </div>
  }
}

export default Forums;
