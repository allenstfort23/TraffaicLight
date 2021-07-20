import React, { useState, useEffect } from "react";

export function TrafficLight() {
	const [color, setColor] = useState();

	return (
		<div>
			<div className="trafficTop"></div>
			<div className="container trafficContainer">
				<div className="trafficContent">
					<div>
						<div
							className={
								color === "red"
									? "btn btn-danger lightColors colorsActive"
									: "btn btn-danger lightColors"
							}
							onClick={() =>
								color === "red" ? setColor("") : setColor("red")
							}></div>
						<div
							className={
								color === "yellow"
									? "btn btn-warning lightColors colorsActive"
									: "btn btn-warning lightColors"
							}
							onClick={() =>
								color === "yellow"
									? setColor("")
									: setColor("yellow")
							}></div>
						<div
							className={
								color === "green"
									? "btn btn-success lightColors colorsActive"
									: "btn btn-success lightColors"
							}
							onClick={() =>
								color === "green"
									? setColor("")
									: setColor("green")
							}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

// btn btn-success lightColors
