import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";
import { Form } from "react-bootstrap";

import "./Login.scss";

const Login = () => {
	const [loginCredentials, setLoginCredentials] = useState({
		email: "",
		password: "",
	});

	const { email, password } = loginCredentials;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { candidate, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess || candidate) {
			navigate("/");
		}

		dispatch(reset());
	}, [candidate, isError, isSuccess, message, navigate, dispatch]);

	const handleChange = (event) => {
		setLoginCredentials((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const submitCred = (event) => {
		event.preventDefault();

		const candidateData = {
			email,
			password,
		};

		// console.log(candidateData);

		dispatch(login(candidateData));
	};

	const handleRegister = () => {
		navigate("/register");
	};

	return (
		<div className='login-form'>
			<div className='form-container'>
				<Form onSubmit={submitCred}>
					<Form.Group>
						<h2>Log In</h2>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label className='label'>Email address</Form.Label>
						<Form.Control
							type='email'
							className='input'
							placeholder='johndoe@email.com'
							name='email'
							onChange={handleChange}
							value={email}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label className='label'>Password</Form.Label>
						<Form.Control
							type='password'
							className='input'
							placeholder='Enter password'
							onChange={handleChange}
							value={password}
							name='password'
						/>
					</Form.Group>

					<button type='submit' className='login-btn'>
						Log In
					</button>

					<hr />

					<Form.Group>
						<p>OR</p>
						<button type='submit' className='google-btn'>
							Continue with Google
						</button>
						<button className='register-btn' onClick={handleRegister}>
							Create an account
						</button>
					</Form.Group>
				</Form>
			</div>
		</div>
	);
};

export default Login;
