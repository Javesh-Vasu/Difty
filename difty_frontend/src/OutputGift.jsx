import React from "react";
import difty from "./assets/difty_logo.svg";

export const OutputGift = ({ output, bg, heading }) => {

	return (
		<>
			<img src={difty} style={{ height: "8rem" }} />
			<div className={`flex items-center text-black mt-4 justify-center`}>
				<p className={`bg-white shadow-2xl rounded-4xl p-4 w-full ${bg} bg-cover w-11/12`}>
					<div className="h-full overflow-hidden bg-white/80 rounded-3xl p-4 flex flex-col gap-4">
						<h1 className=" text-center w-full text-2xl font-bold">
							{heading}
						</h1>
						<div className="whitespace-pre-wrap">{output}</div>
					</div>
				</p>
			</div>
		</>
	);
};
