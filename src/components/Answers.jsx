import React, { useRef } from "react";

function Answers({ answers, selectedAnswer, answerState, onSelect }) {
	const shuffledAnswers = useRef();

	if (!shuffledAnswers.current) {
		shuffledAnswers.current = [...answers];
		shuffledAnswers.current.sort(() => Math.random() - 0.5);
	}

	return (
		<ul id="answers">
			{shuffledAnswers.current.map((answer) => {
				let cssClasses = "";
				const isSelected =
					selectedAnswer === answer;

				if (answerState === "answered" && isSelected) {
					cssClasses = "selected";
				}
				if (
					(answerState === "correct" || answerState === "wrong") &&
					isSelected
				) {
					cssClasses = answerState;
				}

				return (
					<li key={answer} className="answer">
						<button
							onClick={() => onSelect(answer)}
							className={cssClasses}
                            disabled={answerState !== ''}
						>
							{answer}
						</button>
					</li>
				);
			})}
		</ul>
	);
}

export default Answers;
