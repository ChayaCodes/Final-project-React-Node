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
				<a >{thread.title}</a>
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
			
				<a href="/threads/%D7%93%D7%99%D7%A8%D7%AA-%D7%A0%D7%95%D7%A4%D7%A9-%D7%9E%D7%94%D7%9E%D7%9E%D7%AA-%D7%9C%D7%91%D7%99%D7%9F-%D7%94%D7%96%D7%9E%D7%A0%D7%99%D7%9D.793103/latest" rel="nofollow"><time class="structItem-latestDate u-dt" dir="auto" datetime="2024-02-18T20:41:57+0200" data-time="1708281717" data-date-string="18/2/24" data-time-string="20:41" title="בתאריך 18/2/24 בשעה 20:41">18/2/24</time></a>
				<div class="structItem-minor">
					
						<a href="/members/%D7%A0%D7%A2%D7%9E%D7%99_%D7%98.117755/" class="username " dir="auto" data-user-id="117755" data-xf-init="member-tooltip" id="js-XFUniqueId58">נעמי_ט</a>
					
				</div>
			
		</div>
	

	
		<div class="structItem-cell structItem-cell--icon structItem-cell--iconEnd">
			<div class="structItem-iconContainer">
				
					<a href="/members/%D7%A0%D7%A2%D7%9E%D7%99_%D7%98.117755/" class="avatar avatar--xxs avatar--default avatar--default--dynamic" data-user-id="117755" data-xf-init="member-tooltip" style={{backgroundColor: `#5c7a1f`, color: `#b8db70`}} id="js-XFUniqueId59">
			<span class="avatar-u117755-s" role="img" aria-label="נעמי_ט">נ</span> 
		</a>
				
			</div>
		</div>
	

	</div>
  
}

export default ThreadBox;
