import React, { useRef } from "react";
import { useSelector } from "react-redux";
import difty from "./assets/difty_logo.svg";
import { OutputGift } from "./OutputGift";

export const SharableLink = () => {
	const Url = process.env.REACT_APP_URL;
	const { bg, output, sharableLink, heading } = useSelector(
		(state) => state.gptContent
	);
	const linkRef = useRef();

	const copyToClipBoard = () => {
		navigator.clipboard.writeText(linkRef.current.textContent);
	};

	return (
		<div className={`flex flex-col items-center font-kalam h-screen p-6 pt-12`}>
			<OutputGift output={output} bg={bg} heading={heading} />
			<div className="border border-difty-orange border-solid rounded-2xl pl-4 mt-8 flex items-center gap-2">
				<div className="w-44 overflow-hidden whitespace-nowrap" ref={linkRef}>
					{Url}gift/{sharableLink}
				</div>
				<button
					onClick={copyToClipBoard}
					className="px-4 py-3 font-bold self-center bg-difty-orange text-white w-max rounded-2xl"
				>
					Copy Link!
				</button>
			</div>
		</div>
	);
};
