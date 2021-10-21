import React, { useState } from 'react';
import './Header.scss';
import HeroImage from '../img/video-poster.jpg';
import Video from '../video/video.mp4';

///////////////////////////////////

const Header = () => {
	const hidden = 'hidden';
	const [visible, setVisible] = useState(hidden);

	/**
	 * Start up H1 animation on window load
	 */
	setTimeout(() => {
		setVisible('');
	}, 700);


	return (
		<header>
			<div className="header-bg">
				<video poster={ HeroImage } loop autoPlay muted>
					<source src={ Video } type="video/mp4"></source>
				</video>

				<img src={ HeroImage }></img>
			</div>

			<div className="intro-text">
				<h1>
					<span className={ visible }>
						We make people
					</span>
				</h1>
				<h1>
					<span className={ visible }>
						more valuable to brands
					</span>
				</h1>
			</div>

			<div className="icon-scroll">
				<a href="#main-content">
					<span className="material-icons">south</span>
				</a>
			</div>
		</header>
	)
}

export default Header;