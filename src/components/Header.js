import React from 'react';


function Header() {
	return (
		<header>
			<div class="header-bg">
				<video poster="img/video-poster.jpg" loop autoplay muted>
					<source src="img/video.mp4" type="video/mp4"></source>
				</video>
				<img src="img/video-poster.jpg"></img>
			</div>

			<div class="intro-text">
				<h1>
					<span class="hidden">
						We make people
					</span>
				</h1>
				<h1>
					<span class="hidden">
						more valuable to brands
					</span>
				</h1>
			</div>

			<div class="icon-scroll">
				<a href="#main-content">
					<span class="material-icons">south</span>
				</a>
			</div>
		</header>
	)
}