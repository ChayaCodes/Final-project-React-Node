import React from 'react'
import { useSelector } from 'react-redux'
import Editor from '../Editor/Editor'
import './AddPost.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faReply } from '@fortawesome/free-solid-svg-icons'
import { useCreatePostMutation } from '../../../../features/forums/forumApiSliceUser'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'


const AddPost = ({ addPost, thread, content, setContent , setRefreshKey}) => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const [createPost, { isLoading, isError, error }] = useCreatePostMutation();
    const handleCreatePost = async (e) => {
        e.preventDefault();

        const post = {
            content,
            threadId: thread.id,
        };

        try {
            await createPost(post).unwrap();
            setContent('');
            setRefreshKey((oldKey) => oldKey + 1);
        } catch (error) {
            console.log('error', error);
        }
    };

    if (isError) {
        console.log('error', error);
    }

    return (
        <div className="message-inner">
            <div className="message-cell message-cell--user">
                <section className="message-user">
                    <div className="message-avatar ">
                        <img src={user.avatar} alt={user.userName} width="78" height="78" loading="lazy" />
                    </div>
                </section>
            </div>
            <div className="message-cell message-cell--main">
                <div className="message-main js-quickEditTarget">
                    <div className="message-content js-messageContent">
                        <div className="message-userContent lbContainer js-lbContainer " data-lb-id="post-10431855" data-lb-caption-desc="יהודי קטן · בתאריך 12/4/22 בשעה 11:45">
                            <Editor setValue={setContent} value={content} />
                        </div>
                    </div>
                    <div className="formButtonGroup ">
                        <div className="formButtonGroup-primary">
                            <button onClick={handleCreatePost
                            } type="submit" className="button--primary button "><span className="button-text">
                                    <FontAwesomeIcon icon={faReply} />
                                    כתבו תגובה
                                </span></button>
                        </div>
                        <div className="formButtonGroup-extra">
                            <span className="js-attachButton"><a className="button--link js-attachmentUpload button" data-accept=".zip,.txt,.pdf,.png,.jpg,.jpeg,.jpe,.gif,.doc,.docx,.ai,.psd,.rar,.avi,.mp3,.mpg,.mp4,.xls,.xlsx,.ppt,.pptx,.ind,.indd,.dwg,.idml,.ttf,.shx,.skp,.fla,.html,.webp,.skb,.3dm,.json,.sty,.otf,.i,.m4v,.mov,.mp4v,.mpeg,.ogv,.webm,.opus,.ogg,.wav" data-video-size="23552000"><span className="button-text"><FontAwesomeIcon icon={faPaperclip} /> צרף קבצים
                            </span></a><input type="file" multiple="multiple" accept=".zip,.txt,.pdf,.png,.jpg,.jpeg,.jpe,.gif,.doc,.docx,.ai,.psd,.rar,.avi,.mp3,.mpg,.mp4,.xls,.xlsx,.ppt,.pptx,.ind,.indd,.dwg,.idml,.ttf,.shx,.skp,.fla,.html,.webp,.skb,.3dm,.json,.sty,.otf,.i,.m4v,.mov,.mp4v,.mpeg,.ogv,.webm,.opus,.ogg,.wav" title="צרף קבצים" style={{ visibility: 'hidden', position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', right: '-1000px' }} /></span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost