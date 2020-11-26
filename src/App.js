import React from "react";

import "./App.css";
import Demo from "./components/Demo";
import Explication from "./components/Explication";

function App() {
	return (
		<div className="app">
			<Explication />
			<Demo />
		</div>
	);
}

export default App;
