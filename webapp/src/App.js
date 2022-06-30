import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./views/Landing/Landing";
import Login from "./views/Login/Login";
import SignUp from "./views/SignUp/SignUp";

import "./App.scss";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
