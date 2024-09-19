import React, { useState, useEffect } from "react";
import { firestore } from "../lib/firebase/firebase"; // Correct path
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"; // Use 'firebase/firestore' instead of local file
import { Link } from "react-router-dom";

const AdminDashboard = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const usersCollection = collection(firestore, "users");
				const userSnapshot = await getDocs(usersCollection);
				const userList = userSnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setUsers(userList);
			} catch (error) {
				console.error("Error fetching users:", error);
			}
		};

		fetchUsers();
	}, []);

	const handleDeleteUser = async (userId) => {
		try {
			await deleteDoc(doc(firestore, "users", userId));
			setUsers(users.filter((user) => user.id !== userId));
		} catch (error) {
			console.error("Error deleting user:", error);
		}
	};

	return (
		<div className="p-4">
			<div className=" flex justify-around">
				<div>
					<h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
				</div>
				<div>
					<Link to="/user-dashboard">
						<button className=" text-white ">Users dashboard</button>
					</Link>
				</div>
			</div>
			<ul>
				{users.map((user) => (
					<li
						key={user.id}
						className="flex items-center justify-between p-2 border-b"
					>
						<span>
							{user.email} - {user.role}
						</span>
						<button
							onClick={() => handleDeleteUser(user.id)}
							className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AdminDashboard;
