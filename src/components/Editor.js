import React, {useState, useEffect} from "react";
import "./Editor.css";
import Pages from "../pages";
function Editor({counter, setCounter}) {
	const [isCorrect, setIsCorrect] = useState(false);
	const [answer, setAnswer] = useState("");

	useEffect(() => {
		isCorrect
			? (document.querySelector(".editor__button>button").disabled = false)
			: (document.querySelector(".editor__button>button").disabled = true);
	}, [isCorrect]);

	//check if the selector is valid
	const queryCheck = (s) => document.createDocumentFragment().querySelector(s);
	const isSelectorValid = (selector) => {
		try {
			queryCheck(selector);
		} catch {
			return false;
		}
		return true;
	};
	const clickHandler = (e) => {
		setCounter(counter + 1);
		document.querySelector(answer).classList.remove("wheelChoose");
		document.querySelector(".editor__content > textarea").value = "";
		setIsCorrect(false);
		setAnswer("");
	};

	const onChangeHandler = () => {
		const element = document.querySelector("textarea").value;

		if (isSelectorValid(element)) {
			console.log("the element is valid ");
			if (document.querySelector(element) !== null) {
				console.log("the element isn't null ");
				document.querySelector(element).classList.add("wheelChoose");
				if (element === Pages[counter].correctAnswer) {
					setIsCorrect(true);
				}
				setAnswer(element);
			} else {
				console.log("the element is null ");
				if (answer) {
					document.querySelector(answer).classList.remove("wheelChoose");
					setIsCorrect(false);
					setAnswer("");
				}
			}
		} else {
			console.log("the element isn't valid ");
			if (answer) {
				document.querySelector(answer).classList.remove("wheelChoose");
				setIsCorrect(false);
				setAnswer("");
			}
		}
	};
	return (
		<div className="editor">
			<div className="editor__roowNumber">
				<span>1</span>
				<span>2</span>
				<span>3</span>
				<span>4</span>
				<span>5</span>
				<span>6</span>
				<span>7</span>
				<span>8</span>
				<span>9</span>
				<span>10</span>
				<span>11</span>
			</div>
			<div style={{width: "100%"}}>
				<div className="editor__content">
					<textarea rows="1" onChange={onChangeHandler}></textarea>
					<div className="editor__cssCode">
						<pre>
							&#123;
							{`\n  animation: rotation 5s infinite linear;\n  transform-origin: center;\n`}
							&#125;
						</pre>
						<pre></pre>

						<pre>
							{`@keyframes rotation `}&#123;{`\n  from`}&#123;
							{`transform: rotateZ(0deg);`}&#125;
							{`\n  to `}&#123;{`transform: rotateZ(360deg);`} &#125;{`\n`}
							&#125;
						</pre>
					</div>
				</div>
				<div className="editor__button">
					<button onClick={clickHandler}>Next</button>
				</div>
			</div>
		</div>
	);
}

export default Editor;
