import React, { useState } from 'react';
import logo from '../img/logo.png';
import './TopBar.scss';
import LanguageSwitch from './LanguageSwitch';

//////////////////////////////////////////

const TopBar = () => {
	const hideLeft = 'hide-left';
	const iconNav = 'segment';
	const closeIcon = ' close';

	const [slide, setSlide] = useState(hideLeft);
	const [icon, setIcon] = useState(iconNav)

	/**
	 * MOBILE MENU CLICK
	 * Shows and hide the nav bar in mobile versions
	 */
	const menuIconClick = () => {
		if(slide === hideLeft) {
			setSlide('');
			setIcon(closeIcon);
		} else {
			setSlide(hideLeft);
			setIcon(iconNav);
		}
	}

	return (
		<nav className="top-bar">
			<div className="logo">
				<a href="/">
					<img src={logo} alt="Proximity Indian Ocean Logo"></img>
				</a>
			</div>

			<div className="mobile-icon" onClick={menuIconClick}>
				<span className="material-icons">{icon}</span>
			</div>


			<div className={`menu-list ${slide}`} id="mobile-menu-list">
				<ul>
					<li><a href="">About</a></li>
					<li><a href="">Work</a></li>
					<li><a href="">Latest</a></li>
					<li><a href="">People & Careers</a></li>
					<li><a href="">Contact</a></li>
					<li>
						<LanguageSwitch />
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default TopBar;