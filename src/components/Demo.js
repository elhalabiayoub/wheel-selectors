import React from "react";
import "./Demo.css";
//import { ReactComponent as Whl } from "../tire.svg";
import Wheel from "./Wheel";

function Demo() {
	return (
		<div className="demo">
			{/*content */}
			<div className="container">
				<span>container</span>
				<div className="container__childDiv redDiv">
					<span>redDiv</span>
					<Wheel color="orange"></Wheel>
					<Wheel color="gray"></Wheel>
					<Wheel color="salmon"></Wheel>
				</div>
				<div className="container__childDiv yellowDiv">
					<span>yellowDiv</span>
				</div>
				<div className="container__childDiv greenDiv">
					<span>greenDiv</span>
				</div>
			</div>
		</div>
	);
}

export default Demo;
