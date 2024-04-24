import { Grid, Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faDiamondTurnRight } from '@fortawesome/free-solid-svg-icons';
import useFormatedDate from '../../../../hooks/useFormtedDate';
import './ForumBox.css';

const ForumBox = ({ forum }) => {
  console.log(forum);
  return (
    <div class="node-body">
      <span class="node-icon" aria-hidden="true">
        <FontAwesomeIcon icon={faComments} />
      </span>
      <div class="node-main js-nodeMain">
        <h3 class="node-title">
          <a href={`/forums/${forum._id}`}  data-xf-init="" data-shortcut="node-description">{forum.name}</a>
        </h3>
        <div class="node-description ">{forum.description}</div>
      
      </div>
      <div class="node-stats">
        <dl class="pairs pairs--rows">
          <dt>נושאים</dt>
          <dd>{forum.threads}</dd>
        </dl>
        <dl class="pairs pairs--rows">
          <dt>הודעות</dt>
          <dd>{forum.posts}</dd>
        </dl>
      </div>
      <div class="node-extra">
        <div class="node-extra-icon">
          
            <img src={forum.lastPost.userAvater} alt="avatar" class="avatar avatar--xxs" />
        </div>
        <div class="node-extra-row">
          <a 
          class="node-extra-title" title={forum.lastPost.title}
          ><span class="coefficient_ai" dir="auto">עזרה</span><span class="label-append">&nbsp;</span>{forum.lastPost.title}</a>
        </div>
        <div class="node-extra-row">
          <ul class="listInline listInline--bullet">
            <li>
              <time>{useFormatedDate(forum.lastPost.date)}</time>
            </li>
            <li class="node-extra-user"><a class="username " dir="auto" data-user-id="122927" data-xf-init="member-tooltip" id="js-XFUniqueId83">{forum.lastPost.userName}</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ForumBox;
