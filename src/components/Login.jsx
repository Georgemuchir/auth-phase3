import React, { useState } from "react";
import { loginUser } from "../lib/firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async () => {
		try {
			const user = await loginUser(email, password);
			if (user.role === "admin") {
				navigate("/admin-dashboard");
			} else {
				navigate("/user-dashboard");
			}
		} catch (error) {
			console.error(error);
			alert("Error logging in");
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<h2 className="text-2xl font-bold mb-6">Log In</h2>
			<form
				action=""
				className=" flex flex-col"
				onSubmit={(e) => e.preventDefault()}
			>
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
				<div className=" space-x-4">
					<button
						onClick={handleLogin}
						className="px-4 py-2  text-white rounded hover:bg-slate-400"
					>
						Log In
					</button>
					<Link to="/signup">
						<button className="px-4 py-2  text-white rounded hover:bg-slate-400">
							Signup
						</button>
					</Link>
					<Link to="/">
						<button className="px-4 py-2  text-white rounded hover:bg-slate-400">
							Home
						</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
