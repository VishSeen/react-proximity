import React, {useState} from 'react';
import './Main.scss';
import IntroImage from '../img/intro-image.png';
import PencilImage from '../img/pencil.png';

///////////////////////////////////////////////////////////////////

const Main = () => {

	const [scrollY, setScrollY] = useState('');
	const [isVisible, setIsVisible] = useState(false);

	/**
	 * Scrolls the view to top when user clicks on 'Return to top'
	 */
	const scrollToTop = () => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}


	/**
	 * SCROLL DELAY ANIMATION : Delay effect on scrolling
	 */
	function smoothScrollMain(scrollYVal) {
		let delay = (scrollYVal / 3 * 5 / 10);
		return  delay + "px"
	}

	window.addEventListener('scroll', function() {
		if (window.scrollY >= 1000 || window.scrollY <= 1200) {
			setIsVisible(true)
		}
		setScrollY(smoothScrollMain(window.scrollY));
	});


	///////////////////////////////////////////////////////////////////
	// ELEMENTS
	const sectIntro = (
		<section id="sect-intro">
			<div className="title">
				<h4>HOW WE DO IT</h4>

				<h2>We use data-driven creativity <br />
					to solve business problems</h2>
			</div>

			<div className="image">
				<img src={ IntroImage } alt="Business plan image"></img>
			</div>

			<div id="element-text" className="texts" style={{bottom: scrollY}}>
				<p>
					By harnessing powerful insights and smart targeting, we’re able to create behavior-changing ideas and
					experiences that
					deliver value to brands. Supported by our proprietary <a href="#">Creative Intelligence process</a>, <a
						href="#">unique tools</a> and <a href="#">global
							partners</a>,
					we are able to put data at the heart of everything we do to orchestrate experiences that deliver creativity with
					precision and purpose.
				</p>
			</div>
		</section>
	);


	const sectStories = (
		<section id="sect-stories">
			<div className="title">
				<img src={PencilImage} alt="Pencil icon"></img>
				<h4>BUSINESS PROBLEMS WE’VE SOLVED</h4>
			</div>

			<div className="stories">
				<article>
					<h3>
						Can a love story double <br />
						as a hearing test?
					</h3>

					<p>
						<a href="https://www.google.com" target="_blank">Find out here</a>
					</p>
				</article>

				<article>
					<h3>
						How close to an AFL <br />
						player can you get?
					</h3>

					<p>
						<a href="https://www.google.com" target="_blank">Find out here</a>
					</p>
				</article>
			</div>

			<p>
				<a href="">View our work</a>
			</p>
		</section>
	);


	const scrollText = (
		<div className="scroll-top">
			<span onClick={ scrollToTop }>
				<span className="material-icons">north</span>

				Return to top
			</span>
		</div>
	)

	///////////////////////////////////////////////////////////////////

	return (
		<main>
			{ sectIntro }

			{ sectStories }

			{ scrollText }
		</main>
	)

}


export default Main;