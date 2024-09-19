import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import WelcomePage from "./components/WelcomePage"; // Import the WelcomePage component

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<WelcomePage />} /> {/* Welcome page route */}
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admin-dashboard" element={<AdminDashboard />} />
				<Route path="/user-dashboard" element={<UserDashboard />} />
			</Routes>
		</Router>
	);
};

export default App;
