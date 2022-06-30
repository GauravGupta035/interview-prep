import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";
import "./Login.scss";

const Login = () => {
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

	return (
		<div className='login-form'>
			<div className='form-container'>
				<Form>
					<Form.Group>
						<h2>Log In</h2>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='email'
							placeholder='Enter email'
							name='email'
							onChange={handleChange}
							value={loginCredentials.email}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							onChange={handleChange}
							value={loginCredentials.password}
							name='password'
						/>
					</Form.Group>
					<Button
						variant='primary'
						type='submit'
						className='submit-btn'
						onClick={submitCred}
					>
						Log In
					</Button>

					<Form.Group>
						<p>
							Create an account. <a href='/signup'>Sign Up</a>
						</p>
					</Form.Group>
				</Form>
			</div>
		</div>
	);
};

export default Login;
