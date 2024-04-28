import { Link } from 'react-router-dom';
import useFormatedDate from '../../../../hooks/useFormtedDate'
import './ThreadBox.css'
function ThreadBox({ thread }) {

	return <div class="structItem">

		<div class="structItem-cell structItem-cell-icon">
			<div class="structItem-iconContainer">
				<a href="" class="avatar">
					<img src={thread.userAvatar} alt={thread.userName} width="48" height="48" loading="lazy" /></a>
			</div>
		</div>
		<div class="structItem-cell structItem-cell--main">
			<ul class="structItem-statuses">
				{/* <li>
								<i class="structItem-status structItem-status--sticky" aria-hidden="true" title="נעוץ"></i>
								<span class="u-srOnly">נעוץ</span>
							</li> */}
			</ul>
			<div class="structItem-title">
				<Link to={`./${thread.id}`}>{thread.title}</Link>
			</div>
			<div class="structItem-minor">
				<ul className="structItem-parts">
					<li><a class="username "><span >{thread.userName}</span></a></li>
					<li class="structItem-startDate"><a><time>{useFormatedDate(thread.date)}</time></a></li>

				</ul>
			</div>
		</div>
		<div class="structItem-cell structItem-cell--meta">
			<dl class="pairs">
				<dt>תגובות</dt>
				<dd>33</dd>
			</dl>
			<dl class="pairs structItem-minor">
				<dt>צפיות</dt>
				<dd>16K</dd>
			</dl>
		</div>
		<div class="structItem-cell structItem-cell--latest">

			<a><time class="structItem-latestDate">18/2/24</time></a>
			<div class="structItem-minor">
				<a>נעמי_ט</a>
			</div>
		</div>
		<div class="structItem-cell structItem-cell--icon">
			<div class="structItem-iconContainer">
				<a class="avatar " style={{ backgroundColor: `#5c7a1f`, color: `#b8db70` }} >
					<span class="avatar-u117755-s" role="img" aria-label="נעמי_ט">נ</span>
				</a>
			</div>
		</div>
	</div>

}

export default ThreadBox;
