import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import sample from "./assets/sample.png";
import forgive from "./assets/forgive.png";
import gem from "./assets/gem.png";
import back from "./assets/back_circle.png";
import bday from "./assets/bday.png";
import sorry from "./assets/sorry.png";
import ann from "./assets/ann.png";
import {
	addContent,
	addFrom,
	addTo,
	addInfo,
	generatedGift,
} from "./redux/slices/generateTextSlice";
import logo from "./assets/difty_logo.svg";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useEffect, useState } from "react";
export function CreateGift() {
	const apiUrl = process.env.REACT_APP_API_URL;
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const content = useSelector((state) => state.gptContent);
	const [dimsLoad, setDimsLoading] = useState("h-0 p-0");
	const [dimsSubs, setDimsSubs] = useState("h-0 p-0");
	const [loaderWidth, setLoaderWidth] = useState("w-0");
	const [loadingStatus, setLoadingStatus] = useState({
		heading: "While You Wait <br /> Here Is A Poem For You",
		success: true,
		content: gem,
	});

	const closeErrorWindow = () => {
		setDimsLoading("h-0 p-0");
		setLoadingStatus({
			heading: "While You Wait <br /> Here Is A Poem For You",
			success: true,
			content: gem,
		});
	};

	const showTransition = async () => {
		if (!content.content || !content.info || !content.to || !content.from) {
			toast.error("Please fill all fields!");
			return;
		}
		setDimsLoading("h-screen p-8");
		setLoaderWidth("w-full");
		const res = await axios.post(`${apiUrl}/message`, content);
		dispatch(generatedGift(res.data.generated_gift));
		setTimeout(() => {
			if (!content.output) {
				setLoadingStatus({
					heading:
						"We Are Having Trouble Generating Content<br /><br /> Please Try Later",
					success: false,
					content: forgive,
				});
			}
		}, 15000);
	};

	useEffect(() => {
		dispatch(addContent(""));
		dispatch(addInfo(""));
		dispatch(addFrom(""));
		dispatch(addTo(""));
	}, []);
	useEffect(() => {
		if (content.output) {
			navigate("/generated_gift");
		}
	}, [navigate, content.output]);

	const gameSubscribe = () => {
		setDimsSubs("h-screen p-8");
	};

	return (
		<div
			className={`overflow-x-hidden flex flex-col lg:flex-row py-10 px-8 items-center justify-between lg:justify-around min-h-screen transition-all delay-75 font-kalam text-difty-orange`}
		>
			<Toaster />
			<div className="flex items-center w-full lg:absolute lg:top-8 lg:left-8">
				<img src={logo} className="h-10 lg:h-14" />
			</div>
			<div
				className={`text-4xl font-bold  overflow-hidden text-center text-white flex flex-col gap-5 justify-around items-center bg-difty-orange absolute top-0 left-0 z-10 w-screen transition-all duration-500 ${dimsSubs}`}
			>
				<img
					src={back}
					className="rotate-90 h-8"
					onClick={() => setDimsSubs("h-0 p-0")}
				/>
				<h1>We Are Still Working on it.</h1>
				<img src={sample} className="w-56 -rotate-6 shadow-2xl rounded-3xl" />
				<h1> Why Don&apos;t You Subscribe To The Waitlist? </h1>
				<button
					className="text-2xl text-difty-orange px-4 py-3 bg-white rounded-2xl min-w-max"
					onClick={() => navigate("/waitlist/game")}
				>
					Subscribe
				</button>
			</div>
			<div
				className={`flex flex-col justify-around items-center overflow-hidden bg-difty-orange absolute top-0 left-0 z-10 w-screen transition-all duration-500 ${dimsLoad}`}
			>
				<h1
					className="font-bold text-3xl text-center text-white"
					dangerouslySetInnerHTML={{ __html: loadingStatus.heading }}
				/>
				<img
					src={loadingStatus.content}
					className=" w-60 -rotate-6 shadow-2xl rounded-3xl"
				/>

				{loadingStatus.success ? (
					<span className="loader w-full">
						<span className={`loader-bar ${loaderWidth}`}></span>
					</span>
				) : (
					<button
						className="text-2xl text-difty-orange px-4 py-3 bg-white rounded-2xl min-w-max"
						onClick={() => closeErrorWindow()}
					>
						Go Back!
					</button>
				)}
			</div>
			<div className="flex items-center justify-center gap-6 lg:flex-wrap">
				<img
					src={ann}
					className="shadow-2xl lg:rounded-4xl rounded-3xl -rotate-6 w-36 lg:w-48"
				/>
				<img
					src={bday}
					className="shadow-2xl lg:rounded-4xl rounded-3xl -rotate-6 w-36 lg:w-48"
				/>
				<img
					src={sorry}
					className="shadow-2xl lg:rounded-4xl rounded-3xl -rotate-6 w-36 lg:w-48"
				/>
			</div>
			<div className="flex flex-col gap-4 w-full mb-12 lg:w-1/3">
				<div className="flex flex-col items-center w-full gap-1 lg:gap-10 mt-10">
					<h1 className="font-bold text-xl lg:text-4xl">Gift A:</h1>
					<div className="flex justify-around w-full">
						<div className="flex items-center gap-2">
							<input
								type="radio"
								id="poem"
								name="category"
								value="poem"
								onClick={(e) => dispatch(addContent(e.target.value))}
							/>
							<label
								htmlFor="poem"
								className="text-lg font-semibold text-gray-500"
							>
								Poem
							</label>
						</div>
						<div className="flex items-center gap-2">
							<input
								type="radio"
								id="story"
								name="category"
								value="story"
								onClick={(e) => dispatch(addContent(e.target.value))}
							/>
							<label
								htmlFor="story"
								className="text-lg font-semibold text-gray-500"
							>
								Story
							</label>
						</div>
						<div
							className="flex items-center gap-2"
							onClick={() => gameSubscribe()}
						>
							<input
								type="radio"
								id="game"
								name="category"
								value="game"
								// onClick={(e) => dispatch(addContent(e.target.value))}
							/>
							<label
								htmlFor="poem"
								className="text-lg font-semibold text-gray-500"
							>
								Mini Game
							</label>
						</div>
					</div>
				</div>

				<div className="flex flex-col">
					<input
						type="text"
						placeholder="What's Your Name?"
						className="rounded-2xl outline-none border-none bg-mygray p-4 px-6"
						onChange={(e) => dispatch(addFrom(e.target.value))}
					/>
				</div>
				<div className="flex flex-col">
					<input
						type="text"
						placeholder="Who is This For?"
						className="rounded-2xl outline-none border-none bg-mygray p-4 px-6"
						onChange={(e) => dispatch(addTo(e.target.value))}
					/>
				</div>
				<div className="flex flex-col">
					<textarea
						placeholder='Tell Us More...                                                                                                                                                        "Happy Belated Birthday"                                                                                                                                                                                              "I am Sorry"'
						className="rounded-2xl outline-none border-none bg-mygray p-4 px-6"
						rows={3}
						onChange={(e) => dispatch(addInfo(e.target.value))}
						maxLength={250}
					></textarea>
				</div>
				<button
					className="px-4 py-3 font-bold self-center bg-difty-orange text-white w-max rounded-2xl"
					onClick={showTransition}
				>
					Dift Up!
				</button>
			</div>
		</div>
	);
}
