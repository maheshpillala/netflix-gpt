import React from "react";
import Header from "./Header";

const Login = () => {
	const [signIn, setSignIn] = React.useState(true);
	const toggleHandler = () => {
		setSignIn(!signIn);
	};
	return (
		<div>
			<Header />
			<div className="h-screen bg-cover bg-center bg-no-repeat">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
					alt="Netflix background"
					className="inset-0 w-full h-full object-cover"
				/>
			</div>
			<form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-14 rounded shadow-lg">
				<div className="flex flex-col">
					<h1 className="text-white text-2xl mb-8">
						{signIn ? "Sign In" : "Sign UP"}
					</h1>
					{!signIn && (
						<input
							type="text"
							placeholder="Enter your Full Name"
							className="mb-8 p-2 border border-gray-300 rounded w-64 bg-gray-700 text-white"
						/>
					)}
					<input
						type="text"
						placeholder={
							signIn ? "Email or Mobile Number" : "Enter Email or Mobile Number"
						}
						className="mb-8 p-2 border border-gray-300 rounded w-64 bg-gray-700 text-white"
					/>
					<input
						type="password"
						placeholder={signIn ? "Password" : "Enter Password"}
						className="mb-8 p-2 border border-gray-300 rounded w-64 bg-gray-700 text-white"
					/>
					<button className="bg-red-600 text-white px-4 py-2 rounded mb-8">
						{signIn ? "Sign In" : "Sign UP"}
					</button>
					<p
						className="text-white mt-4 cursor-pointer text"
						onClick={toggleHandler}>
						{signIn
							? "New to Netflix? Sign up now"
							: "Already account exists? Sign In Now"}
					</p>
				</div>
			</form>
		</div>
	);
};

export default Login;
