import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Gift } from "./Gift.jsx";
import { SharableLink } from "./SharableLink.jsx";
import { Waitlist } from "./waitlist.jsx";
import { CreateGift } from "./CreateGift.jsx";
import { FinalGift } from "./FinalGift.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/create_gift",
		element: <CreateGift />,
	},
	{
		path: "/generated_gift",
		element: <Gift />,
	},
	{
		path: "/gift",
		element: <SharableLink />,
	},
	{
		path: "/waitlist",
		element: <Waitlist />,
	},
	{
		path: "/gift/:id",
		element: <FinalGift />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
