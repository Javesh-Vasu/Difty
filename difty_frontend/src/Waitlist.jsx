import React, { useState } from "react";
import logo from "./assets/difty_logo.svg";
import sample from "./assets/sample.png";
import { Link } from "react-router-dom";

export const Waitlist = () => {
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
			className={`flex bg-contain flex-col items-center min-h-screen transition-all delay-75 font-kalam ${textColor}`}
		>
			<div className="flex flex-col items-center w-full gap-10 my-auto p-8 h-screen">
				<div className="flex items-center w-full">
				<Link to="/">
					<img src={logo} className="h-10 lg:h-14" />
				</Link>
				</div>
				<div
					className={`bg-difty-orange absolute top-0 left-0 -z-10 w-screen transition-all duration-500 ${dims}`}
				></div>
				<img src={sample} className="w-56 -rotate-6 shadow-2xl rounded-3xl" />
				{flag ? (
					<div className="flex flex-col items-center font-inter">
						<img src={logo} style={{ height: "8rem" }} className="ml-5" />
						<div className="flex gap-4 items-center">
							<input
								type="email"
								placeholder="Email Address"
								className={`rounded-2xl outline-none border-none ${
									bgColor !== "bg-white" ? "bg-gray-100" : "bg-white"
								} p-4 px-6 w-9/12`}
							/>
							<button
								className={`px-4 py-3 font-bold ${bgColor} ${
									bgColor === "bg-white" ? "text-difty-orange" : "text-white"
								} rounded-2xl min-w-max`}
								onClick={showTransition}
							>
								Dift Up!
							</button>
						</div>
					</div>
				) : (
					<h1 className="text-6xl font-bold font-kalam text-center">
						Thanks for Subscribing!
					</h1>
				)}
			</div>
		</div>
	);
};
