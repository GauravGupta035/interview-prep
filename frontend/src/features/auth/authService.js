import axios from "axios";

const API_URL = "/api/candidates/";

// Register user
const register = async (userData) => {
	const response = await axios.post(API_URL, userData);

	if (response.data) {
		localStorage.setItem("candidate", JSON.stringify(response.data));
	}

	return response.data;
};

// Login candidate
const login = async (candidateData) => {
	const response = await axios.post(API_URL + "login", candidateData);

	if (response.data) {
		localStorage.setItem("candidate", JSON.stringify(response.data));
	}

	return response.data;
};

// Logout
const logout = () => {
	localStorage.removeItem("candidate");
};

const authService = {
	register,
	logout,
	login,
};

export default authService;
