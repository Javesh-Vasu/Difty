import React, { useEffect, useState } from "react";
import { OutputGift } from "./OutputGift";
import axios from "axios";
import { useParams } from "react-router-dom";

export const FinalGift = () => {
	const sharableLink = useParams();
	const [heading, setHeading] = useState("A Poem To Remember Us!");
	const [bg, setBg] = useState("");
	const [output, setOutput] = useState("");
	const apiUrl = process.env.REACT_APP_API_URL;
	useEffect(() => {
		(async () => {
			const res = await axios.get(`${apiUrl}/generateLink`, {
				params: {
					generatedId: sharableLink.id,
				},
			});
			setBg(res.data.bg);
			setOutput(res.data.message);
		})();
	}, []);
	return (
		<div className={`flex flex-col items-center font-kalam h-screen p-6 pt-12`}>
			<OutputGift output={output} bg={bg} heading={heading} />
		</div>
	);
};
