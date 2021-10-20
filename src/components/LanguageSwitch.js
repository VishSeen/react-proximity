import { Component } from "react";
import React, {useState } from 'react';

///////////////////////////////////////

function LanguageSwitch() {
	const [enActive, setEnActive] = useState('active');
	const [frActive, setFrActive] = useState('');

	/**
	 * Switch button on different language selection
	 */
	const switchLanguage = (lang) => {
		if (lang === "en") {
			setEnActive("active");
			setFrActive("");
		} else {
			setEnActive("");
			setFrActive("active");
		}
	}

	return (
		<div className="language">
			<button className={enActive} onClick={() => switchLanguage("en")}>EN</button>

			<button className={frActive} onClick={() => switchLanguage("fr")}>FR</button>
		</div>
	)
}


export default LanguageSwitch;