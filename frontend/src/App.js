import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Landing from "./views/Landing/Landing";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";

import "./App.scss";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</>
	);
};

export default App;
