import React from "react";
import difty from "./assets/difty_logo.svg";
import { Link } from "react-router-dom";

export const OutputGift = ({ output, bg, heading }) => {
	return (
		<>
			<Link to="/">
				<img src={difty} style={{ height: "8rem" }} />
			</Link>
			<div className={`flex items-center text-black mt-4 justify-center`}>
				<p
					className={`bg-white shadow-2xl rounded-4xl p-4 w-full ${bg} bg-center bg-cover w-11/12`}
				>
					<div className="h-full overflow-hidden bg-white/80 rounded-3xl p-4 flex flex-col">
						<h1 className=" text-center w-full text-2xl font-bold mb-4">
							{heading}
						</h1>
						<div className="whitespace-pre-wrap">{output}</div>
						<img src={difty} className="w-10 ml-auto" />
					</div>
				</p>
			</div>
		</>
	);
};
