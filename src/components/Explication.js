import React, {useState} from "react";
import "./Explication.css";
import Header from "./Header";
import Content from "./Content";
import Editor from "./Editor";

function Explication() {
	const [counter, setCounter] = useState(0);
	return (
		<div className="explication">
			{/*header */}
			<Header counter={counter} setCounter={setCounter} />
			{/*the content explication */}
			<Content counter={counter} />
			{/*code part  */}
			<Editor setCounter={setCounter} counter={counter} />
		</div>
	);
}

export default Explication;
