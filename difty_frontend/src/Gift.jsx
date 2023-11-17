import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import back from "./assets/back.svg";
import next from "./assets/next.svg";
import logo from "./assets/difty_logo.svg";
import { addBgImage, addLink } from "./redux/slices/generateTextSlice";
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router-dom";

export const Gift = () => {
	const { bg, output, content, heading } = useSelector(
		(state) => state.gptContent
	);
	const apiUrl = process.env.REACT_APP_API_URL;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [count, setCount] = useState(0);
	const templates = [
		"bg-wp1",
		"bg-wp2",
		"bg-wp3",
		"bg-wp4",
		"bg-wp5",
		"bg-wp6",
		"bg-wp7",
		"bg-wp8",
		"bg-wp9",
		"bg-wp10",
		"bg-wp11",
		"bg-wp12",
		"bg-wp13",
		"bg-wp14",
		"bg-wp15",
		"bg-wp16",
		"bg-wp17",
		"bg-wp18",
		"bg-wp19",
		"bg-wp20",
		"bg-wp21",
		"bg-wp22",
		"bg-wp23",
		"bg-wp24",
		"bg-wp25",
		"bg-wp26",
	];

	const generateLink = async () => {
		const generatedId = uuid();
		dispatch(addLink(generatedId));
		dispatch(addBgImage(templates[count]));
		const data = {
			generatedId,
			message: output,
			bg: bg ? bg : templates[count]
		}
		const res = await axios.post(`${apiUrl}/generateLink`, data)
		navigate(`/gift`)
	}

	return (
		<div
			className={`overflow-x-hidden flex flex-col py-10 px-8 items-center min-h-screen transition-all delay-75 font-kalam text-difty-orange`}
		>
			<div className="flex items-center w-full">
				<img src={logo} className="h-10" />
			</div>
			<div className="flex flex-col gap-5 my-auto items-center justify-center h-full">
				<h1 className="text-4xl font-bold font-kalam">Your Gift !</h1>
				<div className={`flex items-center p-2 text-black`}>
					<img
						src={back}
						onClick={() =>
							setCount((p) => (p === 0 ? templates.length - 1 : p - 1))
						}
						className="fixed cursor-pointer left-4 lg:left-1/4 top-1/2 bg-difty-orange shadow-sm shadow-black p-2 rounded-full h-10 w-10"
					/>
					<p
						className={`bg-white shadow-2xl rounded-3xl p-4 w-full ${templates[count]} bg-cover`}
					>
						<div className="rounded-2xl h-full bg-white/80 p-4 flex flex-col gap-4">
							<h1 className=" text-center w-full text-xl font-bold">
								{heading}
							</h1>
							<div className="whitespace-pre-wrap">{output}</div>
						</div>
					</p>
					<img
						src={next}
						onClick={() =>
							setCount((p) => (p === templates.length - 1 ? 0 : p + 1))
						}
						className="fixed cursor-pointer right-4 lg:right-1/4 top-1/2 bg-difty-orange shadow-sm shadow-black p-2 rounded-full h-10 w-10"
					/>
				</div>
			</div>
			<button className="bg-difty-orange py-3 px-6 rounded-2xl font-bold text-white text-xl my-5 mb-10" onClick={generateLink}>
				Generate Link
			</button>
		</div>
	);
};
