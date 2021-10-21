import React from 'react';
import './Footer.scss';
import LinkedIn from '../img/social/linkedin.png';
import Fb from '../img/social/fb.png';
import Twitter from '../img/social/twitter.png';

///////////////////////////////////////////////////////////////////

const Footer = () => {
	return (
		<footer>
			<div className="copyright">
				<p>
					© Proximity Worldwide 2018. All Rights Reserved. <a href="https://www.google.com" target="_blank">Privacy statement.</a>
				</p>
			</div>

			<div className="socials">
				<ul>
					<li>
						<a href="" target="_blank">
							<img src={ LinkedIn } alt="LinkedIn Link" />
						</a>
					</li>

					<li>
						<a href="" target="_blank">
							<img src={ Fb } alt="Twitter Link" />
						</a>
					</li>

					<li>
						<a href="" target="_blank">
							<img src={ Twitter } alt="Facebook Link" />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}


export default Footer;
