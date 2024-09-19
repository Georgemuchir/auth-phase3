import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>
			<p className="mb-4 text-lg">Please choose an option to proceed:</p>
			<div className="space-x-4">
				<button
					onClick={() => navigate("/signup")}
					className="px-4 py-2  text-white rounded "
				>
					Sign Up
				</button>
				<button
					onClick={() => navigate("/login")}
					className="px-4 py-2  text-white rounded "
				>
					Log In
				</button>
			</div>
		</div>
	);
};

export default WelcomePage;
