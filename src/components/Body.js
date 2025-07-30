import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const AppRouter = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/browse",
		element: <Browse />,
	},
]);

const Body = () => {
	return (
		<div>
			<RouterProvider router={AppRouter} />
		</div>
	);
};

export default Body;
