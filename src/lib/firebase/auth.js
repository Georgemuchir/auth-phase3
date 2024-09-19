import { auth, firestore } from "./firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { ADMIN_EMAIL } from "../../admin";

export const signUpUser = async (email, password) => {
	try {
		const role = email === ADMIN_EMAIL ? "admin" : "user";
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const uid = userCredential.user.uid;

		await setDoc(doc(firestore, "users", uid), {
			email: email,
			role: role,
		});

		return userCredential;
	} catch (error) {
		console.error("Error signing up:", error);
		throw error;
	}
};

export const loginUser = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		const uid = userCredential.user.uid;

		// Fetch the user's role from Firestore
		const userDoc = await getDoc(doc(firestore, "users", uid));
		const userData = userDoc.data();

		return {
			uid,
			role: userData.role,
		};
	} catch (error) {
		console.error("Error logging in:", error);
		throw error;
	}
};

export const logoutUser = async () => {
	try {
		await auth.signOut();
		console.log("User logged out successfully");
	} catch (error) {
		console.error("Error logging out:", error);
	}
};
