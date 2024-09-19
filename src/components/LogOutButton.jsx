// src/components/LogoutButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../lib/firebase/auth";

const LogOutButton = () => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		await logoutUser();
		navigate("/"); // Redirects to the home screen after logout
	};

	return (
		<button
			className="bg-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg outline-none"
			onClick={handleLogout}
		>
			Log Out
		</button>
	);
};

export default LogOutButton;
