import React, { useEffect, useState } from 'react';
import { useGetThreadQuery } from '../../../../features/forums/forumApiSliceUser';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import PostBox from '../postBox/PostBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClock, faTags } from '@fortawesome/free-solid-svg-icons';
import './ThreadPage.css';
import useFormatedDate from '../../../../hooks/useFormtedDate';
import AddPost from '../addPost/AddPost';
import ComunityHeader from '../ComunityHeader/ComunityHeader';
import Pagination from '@mui/material/Pagination';

const ThreadPage = () => {
  const { forumId, threadId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [page, setPage] = useState(query.get('page') || 1);

  const { data, isLoading, isError, isSuccess, error } = useGetThreadQuery({ forumId, threadId, page });
  const formatedDate = useFormatedDate(data?.date);



  const handlePageChange = (event, value) => {
    query.set('page', value);
    navigate({ pathname: location.pathname, search: query.toString() });
    setPage(value)
  };

  const [postsList, setPostsList] = useState(null);

    useEffect(() => {
        if (isSuccess)
            setPostsList(data.posts);
    }, [isSuccess, data]);

    const onChangeSearch = (e) => {
        const search = e.target.value;
        const filteredPosts = data.posts.filter((post) => post.content.includes(search));
        setPostsList(filteredPosts);
    }

    const onChangeSortBy = (e) => {
        const sortBy = e.target.value;
        const postsCopy = [...postsList]
        if (sortBy === 'content') {
            const sortedPosts = postsCopy.sort((a, b) => a.content.localeCompare(b.content));
            setPostsList(sortedPosts);
        } else if (sortBy === 'date') {
            const sortedPosts = postsCopy.sort((a, b) => new Date(b.date) - new Date(a.date));
            setPostsList(sortedPosts);
        }
    }

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div style={{ color: 'red' }}>{error && <div>{error.message}</div>}</div>;
  return (
    <div>
      <ComunityHeader placeholder="הקלד מילת חיפוש..." onChangeSearch={onChangeSearch} onChangeSortBy={onChangeSortBy} sortByOptions={['content', 'date']} />

            <div className="p-body-header">
                <div className="p-title">
                    <h1 className="p-title-value">{data.title}</h1>
                </div>
                <div className="p-description">
                    <ul className="listInline listInline--bullet">
                        <li>
                            <FontAwesomeIcon icon={faUser} title="פותח הנושא" />
                            <a className="username u-concealed">{data.userName}</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faClock} title="פורסם בתאריך" />
                            <a href={`/threads/${data.threadId}`} className="u-concealed">{formatedDate}</a>
                        </li>
                        {/* <li>
                        <dl className={`tagList tagList--thread-${data.threadId}`}>
                            <dt>
                                <a href={`/threads/${data.threadId}/tags`} className="u-concealed--icon">
                                    <FontAwesomeIcon icon={faTags} title="תגיות" />
                                </a>
                            </dt>
                            <dd>
                                <span className="js-tagList">
                                    {data.tags?.length > 0 ? data.tags?.join(', ') : 'אין פריטים'}
                                </span>
                            </dd>
                        </dl>
                    </li> */}
                    </ul>
                </div>
            </div>
            <div className='posts'>

                <PostBox key={data.id} post={data.content} content={content} setContent={setContent} />
                {postsList && postsList.map((post) => (
                    <PostBox key={post.id} post={post} content={content} setContent={setContent} />
                ))}
                <AddPost thread={data} content={content} setContent={setContent} />
            </div>
            <Pagination count={data.totalPages} page={page} onChange={handlePageChange} sx={{ marginBottom: '20px' }} />
        </div>
    );
}

export default ThreadPage;