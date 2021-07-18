import React, { useState, useEffect } from "react";

export function TrafficLight() {
	let [color, setColor] = useState(red);

	// const updateInfo = e => {
	// 	setInputValue(e.target.button);
	// };

	// useEffect(() => {
	// 	if (color === "") {
	// 	} else {
	// 	}
	// }, [color]);

	useEffect(() => {
		if (color === red) {
			color = red.background;
		}
	}, [color]);

	// const buttonColor = console.log("you clicked the red button. Cool");

	const trafficContainer = {
		marginTop: "70px",
		background: "black",
		paddingLeft: "5px",
		paddingRight: "5px",
		height: "400px",
		width: "250px"
	};
	const trafficContent = {
		margin: "auto",
		width: "50%",
		border: "10px",
		padding: "10px"
	};

	const buttonClicked = () => {
		if (color === "yellow") {
			console.log("This button works!");
		}
		// backgroundColor;
	};

	const litRed = {
		height: "100px",
		width: "100px",
		margin: "auto",
		background: "red",
		borderRadius: "200%",
		border: "1px solid",
		padding: "10px",
		boxShadow: "0 0 20px 5px"
	};

	// const backgroundColor = {
	// 	border: "1px solid",
	// 	padding: "10px",
	// 	boxShadow: " 5px 10px 5px 10px yellow"
	// };

	const red = {
		height: "100px",
		width: "100px",
		margin: "auto",
		background: "red",
		borderRadius: "200%",
		border: "none"
	};

	const green = {
		height: "100px",
		width: "100px",
		margin: "auto",
		background: "green",
		borderRadius: "200%"
	};

	const yellow = {
		height: "100px",
		width: "100px",
		margin: "auto",
		background: "yellow",
		borderRadius: "200%"
	};

	let litClicked = color => {
		if (color === null) {
			color = red;
		}
	};

	return (
		<div>
			<div className="trafficTop"></div>
			<div className="container" style={trafficContainer}>
				<div className="trafficContent" style={trafficContent}>
					<div onClick={buttonClicked}>
						<div className="text-danger" style={red}></div>
						<div className="yellow-light" style={yellow}></div>
						<div className="green-light" style={green}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
