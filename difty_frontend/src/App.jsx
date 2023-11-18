import "./App.css";
import React, { useState } from "react";
import difty from "./assets/difty_logo.svg";
import { Link } from "react-router-dom";
import sample from "./assets/sample.png";
import logo from "./assets/difty_logo.svg";

const App = () => {
	const [dims, setDims] = useState("h-0");
	const [textColor, setTextColor] = useState("text-difty-orange");
	const [bgColor, setBgColor] = useState("bg-difty-orange");
	const [flag, setFlag] = useState(true);

	const showTransition = () => {
		setDims("h-screen");
		setTextColor("text-white");
		setBgColor("bg-white");
		setFlag(false);
	};

	return (
		<div
			className={`flex bg-contain flex-col items-center min-h-screen p-8 transition-all delay-75 font-kalam ${textColor}`}
		>
			<div className="flex items-center w-full">
				<Link to="/">
					<img src={logo} className="h-10 lg:h-14" />
				</Link>{" "}
			</div>
			<div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-36 lg:absolute lg:top-0 w-full gap-10 my-auto p-10 h-screen">
				<img
					src={sample}
					className="w-56 lg:w-80 -rotate-6 shadow-2xl rounded-3xl lg:rounded-4xl"
				/>
				<div className="flex flex-col items-center font-inter ml-5">
					<img src={difty} className="h-46 lg:h-52" />
					<Link
						to="/create_gift"
						className={`text-center mt-2 font-kalam px-4 py-3 text-xl lg:text-2xl lg:px-7 lg:self-center lg:py-4 font-bold w-44 self-start ${bgColor} ${
							bgColor === "bg-white" ? "text-difty-orange" : "text-white"
						} rounded-2xl min-w-max`}
					>
						Start Difting!
					</Link>
				</div>
			</div>
		</div>
	);
};

export default App;
