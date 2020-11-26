import React, {useEffect} from "react";
import "./Content.css";
import Pages from "../pages";

function Content({counter}) {
	useEffect(() => {
		document.querySelector(".content__instructions").innerHTML =
			Pages[counter]?.instructions;
	}, [counter]);
	return (
		<div className="content">
			<p className="content__instructions"></p>
		</div>
	);
}

export default Content;
