import { Grid, Typography, Box, Avatar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faDiamondTurnRight } from '@fortawesome/free-solid-svg-icons';
import useFormatedDate from '../../../../hooks/useFormtedDate';
import './ForumBox.css';
import { Link } from 'react-router-dom';

const ForumBox = ({ forum }) => {
  console.log(forum);
  console.log("last post", forum.lastPost)
  console.log("user avater", forum.lastPost?.userAvatar)
  return (
    <div className="node-body">

      <div className="node-main">
        <h3 className="node-title">
          <Link color='black' className='node-title' to={`/personal-area/community/${forum.id}`}>{forum.name}</Link>
        </h3>
        <div className="node-description ">{forum.description}</div>

      </div>
      <div className='node-left'>
        <div className="node-extra">
          <div className="node-extra-icon">

            <img src={forum.lastPost?.userAvatar} alt={`Avatar ${forum.lastPost?.userAvatar}`} className="avatar" />
          </div>
          <div className="node-extra-row">
            <a className="node-extra-title">נושא אחרון שנפתח</a>
          </div>
          <div className="node-extra-row">
            <div className="listInline">
              <div>
                <time>{useFormatedDate(forum.lastPost?.date)}</time>
              </div>
              <div className="node-extra-user"><a className="username" dir="auto" >ע"י {forum.lastPost.userName}</a></div>
            </div>
          </div>
        </div>
        <div className="node-stats">
        <dl className="pairs">
          <dt><b>נושאים</b></dt>
          <dd>{forum.threads}</dd>
        </dl>
        <dl className="pairs">
          <dt><b>הודעות</b></dt>
          <dd>{forum.posts}</dd>
        </dl>
      </div>
      </div>
    </div>
  );
}

export default ForumBox;
