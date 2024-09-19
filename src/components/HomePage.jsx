const HomePage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// Redirect logged-in users to their dashboard
				// Check role or redirect to a default dashboard
				navigate(
					user.email === ADMIN_EMAIL ? "/admin-dashboard" : "/user-dashboard"
				);
			} else {
				// Redirect users to login page if not signed in
				navigate("/login");
			}
		});

		return () => unsubscribe();
	}, [navigate]);

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Welcome to Our App</h1>
			<button
				onClick={() => navigate("/signup")}
				className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
			>
				Sign Up
			</button>
		</div>
	);
};
