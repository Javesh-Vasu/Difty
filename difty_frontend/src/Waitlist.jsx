import React, { useState } from "react";
import dots from "./assets/wp1.jpeg";

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
			className={`flex flex-col py-10 px-8 items-center justify-between min-h-screen transition-all delay-75 font-kalam ${textColor}`}
		>
			<div className="flex items-center w-full">
				<h1 className="text-xl">DIFTY</h1>
			</div>
			<div
				className={`bg-difty-orange absolute top-0 left-0 -z-10 w-screen transition-all duration-500 ${dims}`}
			></div>
			<div className=" bg-white shadow-2xl rounded-4xl -rotate-6 p-4 w-1/2 h-60 aspect-video">
				<img src={dots} className="h-full rounded-3xl" />
			</div>
			{flag ? (
				<div className="flex flex-col gap-4 items-center font-inter">
					<h1 className="text-7xl font-bold font-kalam">Difty</h1>
					<p
						className={`${
							bgColor !== "bg-white" ? "text-gray-500" : "text-white"
						} transition-all delay-100`}
					>
						Color Your Wishes !
					</p>
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
			<footer
				className={`flex flex-col gap-2 font-inter ${
					bgColor !== "bg-white" ? "text-black" : "text-white"
				} transition-all delay-300`}
			>
				<div>© Difty Gifty Inc. 2023</div>
				<div className="flex gap-4 justify-between font-bold">
					<p>Instagram</p>
					<p>Twitter</p>
				</div>
			</footer>
		</div>
	);
};
