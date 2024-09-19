import React, { useState } from "react";
import { signUpUser } from "../lib/firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("user"); // Default to 'user'
	const navigate = useNavigate();

	const handleSignUp = async () => {
		try {
			await signUpUser(email, password, role);
			alert("User created successfully");
			navigate("/login"); // Redirect to login page after sign-up
		} catch (error) {
			console.error(error);
			alert("Error creating user");
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<h2 className="text-2xl font-bold mb-6">Sign Up</h2>
			{/* <form action="" className=" flex-col flex"> */}
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="mb-4 px-4 py-2 border rounded"
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className="mb-4 px-4 py-2 border rounded"
			/>
			<select
				value={role}
				onChange={(e) => setRole(e.target.value)}
				className="mb-4 px-4 py-2 border rounded"
			>
				<option value="user">User</option>
				<option value="admin">Admin</option>
			</select>
			<div className=" space-x-4">
				<button
					onClick={handleSignUp}
					className="px-4 py-2  text-white rounded hover:bg-slate-400"
				>
					Sign Up
				</button>
				{/* <Link to="/login">
						<button className="px-4 py-2  text-white rounded hover:bg-slate-400">
							Login
						</button>
					</Link>*/}
				<Link to="/">
					<button className="px-4 py-2  text-white rounded hover:bg-slate-400">
						Home
					</button>
				</Link>
			</div>
			{/* </form> */}
		</div>
	);
};

export default SignUp;
