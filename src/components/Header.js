import React, {useEffect} from "react";
import "./Header.css";
import pages from "../pages";

function Header({setCounter, counter}) {
	useEffect(() => {
		if (counter + 1 >= pages.length) {
			document.querySelector(".right").classList.add("header__block--disabled");
			document
				.querySelector(".left")
				.classList.remove("header__block--disabled");
		} else if (counter <= 0) {
			document
				.querySelector(".right")
				.classList.remove("header__block--disabled");
			document.querySelector(".left").classList.add("header__block--disabled");
		} else {
			document
				.querySelector(".right")
				.classList.remove("header__block--disabled");
			document
				.querySelector(".left")
				.classList.remove("header__block--disabled");
		}
	}, [counter]);
	const clickHandler = (type) => {
		if (type === "right" && counter + 1 < pages.length) {
			setCounter(counter + 1);
		} else if (type === "left" && counter > 0) {
			setCounter(counter - 1);
		}
	};
	return (
		<div className="header">
			<h3>Wheel Selectors</h3>
			<div className="header__levels ">
				<span
					className="header__block  left"
					onClick={clickHandler.bind(this, "left")}
				>
					<pre>{`<`}</pre>
				</span>
				<span className="header__block center">
					<pre>
						{counter + 1} of {pages.length}
					</pre>
				</span>
				<span
					className="header__block right"
					onClick={clickHandler.bind(this, "right")}
				>
					<pre>{`>`}</pre>
				</span>
			</div>
		</div>
	);
}

export default Header;
