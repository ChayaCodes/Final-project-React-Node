import React from 'react'
import './PostBox.css'
import useFormatedDate from '../../../../hooks/useFormtedDate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faQuoteRight, faReply } from '@fortawesome/free-solid-svg-icons';

const PostBox = ({post, content, setContent}) => {

    const handleReply = () => {
        setContent(`<blockquote>${post.content}</blockquote>` + content)
        window.scrollTo(0,document.body.scrollHeight);
    }


    return (
        <div className="message-inner">
            <div className="message-cell message-cell--user">
                <section className="message-user">
                    <div className="message-avatar ">
                        <img src={post.userAvatar} alt={post.userName} width="78" height="78" loading="lazy" />
                    </div>
                    <div className="message-userDetails">
                        <h4 className="message-name"><a href="" className="username " ><span > {post.userName}</span></a></h4>
                    </div> <span className="message-userArrow"></span> </section>
            </div>
            <div className="message-cell message-cell--main">
                <div className="message-main js-quickEditTarget">
                    <div className="message-attribution message-attribution--split">
                        <ul className="message-attribution-main listInline ">
                            <li className="u-concealed">
                                <time>{useFormatedDate(post.date)}</time>
                            </li>

                        </ul>
                    </div>
                    <div className="message-content js-messageContent">
                        <div className="message-userContent lbContainer js-lbContainer " data-lb-id="post-10431855" data-lb-caption-desc="יהודי קטן · בתאריך 12/4/22 בשעה 11:45">
                            <article className="message-body js-selectToQuote">
                            <div className="bbWrapper" dangerouslySetInnerHTML={{ __html: post.content }} />
                                <div className="js-selectToQuoteEnd">&nbsp;</div>
                            </article>
                        </div>
                    </div>
                    <footer className="message-footer">
                        <div className="message-actionBar actionBar">
                            <div className="actionBar-set actionBar-set--external">

                                <a className="actionBar-action"> <FontAwesomeIcon icon={faThumbsUp} /> תודה</a>
                                <a className="actionBar-action "> <FontAwesomeIcon icon={faQuoteRight} /> ציטוט</a>
                                <a onClick={handleReply} className="actionBar-action"> <FontAwesomeIcon icon={faReply} /> השב</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}




export default PostBox