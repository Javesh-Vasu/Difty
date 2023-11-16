import "./App.css";
import React, { useState } from "react";
import difty from "./assets/difty_logo.svg";
import { Link } from "react-router-dom";
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
			className={`flex bg-bg1 bg-contain flex-col items-center min-h-screen transition-all delay-75 font-kalam ${textColor}`}
		>
			<div className="flex flex-col items-center w-full gap-10 my-auto p-10 h-screen">
				<div className="flex items-center w-full">
					<img src={logo} className="h-10" />
				</div>
				<div className="bg-wp8 bg-contain p-4 shadow-2xl rounded-4xl -rotate-6 w-11/12 h-3/5">
					<div className="bg-white/50 flex flex-col text-black py-4 px-2 rounded-3xl items-center h-full">
						<h1 className="font-bold text-3xl">Something New</h1>
						<p className="text-sm px-1 my-auto">
							I'm the first chapter in life's wild brew,
							<br />
							A quirky concoction, a debut so true.
							<br />
							In the carnival of beginnings, I'm the parade,
							<br />
							A sassy start, in shades of lemonade.
							<br />
							<br />
							The canvas is blank, but I wield the brush,
							<br />
							A whimsical journey, a playful hush.
							<br />
							I'm the dawn's laughter, the morning's cue,
							<br />
							A mischievous prelude to something brand new!
							<br />
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center font-inter ml-5">
					{/* <h1 className="text-7xl font-bold font-kalam">Difty</h1>
					<p
						className={`${
							bgColor !== "bg-white" ? "text-gray-500" : "text-white"
						} transition-all delay-100`}
					>
						Color Your Wishes !
					</p> */}
					<img src={difty} style={{ height: "8rem" }} />
					<Link
						to="/create_gift"
						className={`text-center mt-2 font-kalam px-4 py-3 text-xl font-bold w-44 self-start ${bgColor} ${
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
