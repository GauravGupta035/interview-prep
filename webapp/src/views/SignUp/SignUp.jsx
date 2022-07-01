import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

import "./SignUp.scss";

const SignUp = () => {
	const navigate = useNavigate();

	const [signupCredentials, setSignupCredentials] = useState({
		displayName: "",
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;

		setSignupCredentials((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	};

	const handleLogin = () => {
		navigate("/login");
	};

	const submitCred = (event) => {
		console.log("Submitted signup creds");

		event.preventDefault();
	};

	return (
		<div className='signup-form'>
			<div className='form-container'>
				<Form>
					<Form.Group>
						<h2>Sign Up</h2>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicName'>
						<Form.Label className='label'> Display Name</Form.Label>
						<Form.Control
							type='text'
							className='input'
							placeholder='John Doe'
							name='displayName'
							value={signupCredentials.displayName}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label className='label'>Email address</Form.Label>
						<Form.Control
							type='email'
							className='input'
							placeholder='johndoe@email.com'
							name='email'
							onChange={handleChange}
							value={signupCredentials.email}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label className='label'>Password</Form.Label>
						<Form.Control
							type='password'
							className='input'
							placeholder='Enter password'
							onChange={handleChange}
							value={signupCredentials.password}
							name='password'
						/>
					</Form.Group>

					<button type='submit' className='signup-btn' onClick={submitCred}>
						Sign Up
					</button>

					<hr />

					<Form.Group>
						<p>Already have an account?</p>
						<button className='login-btn' onClick={handleLogin}>
							Log In
						</button>
					</Form.Group>
				</Form>
			</div>
		</div>
	);
};

export default SignUp;
