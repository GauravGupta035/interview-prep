import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "react-bootstrap";
import "./Login.scss";

const Login = () => {
	const navigate = useNavigate();

	const [loginCredentials, setLoginCredentials] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;

		setLoginCredentials((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	};

	const submitCred = (event) => {
		console.log("Submitted login creds");

		event.preventDefault();
	};

	const handleSignup = () => {
		navigate("/signup");
	};

	return (
		<div className='login-form'>
			<div className='form-container'>
				<Form>
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
							value={loginCredentials.email}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label className='label'>Password</Form.Label>
						<Form.Control
							type='password'
							className='input'
							placeholder='Enter password'
							onChange={handleChange}
							value={loginCredentials.password}
							name='password'
						/>
					</Form.Group>

					<button type='submit' className='login-btn' onClick={submitCred}>
						Log In
					</button>

					<hr />

					<Form.Group>
						<p>OR</p>
						<button type='submit' className='google-btn'>
							Continue with Google
						</button>
						<button className='signup-btn' onClick={handleSignup}>
							Create an account
						</button>
					</Form.Group>
				</Form>
			</div>
		</div>
	);
};

export default Login;
