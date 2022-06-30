import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import "./SignUp.scss";

const SignUp = () => {
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
						<Form.Label> Display Name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter display name'
							name='displayName'
							value={signupCredentials.displayName}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='email'
							placeholder='Enter email'
							name='email'
							onChange={handleChange}
							value={signupCredentials.email}
						/>
						<Form.Text className='text-muted'>
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							onChange={handleChange}
							value={signupCredentials.password}
							name='password'
						/>
					</Form.Group>
					<Button
						variant='primary'
						type='submit'
						className='submit-btn'
						onClick={submitCred}
					>
						Sign Up
					</Button>

					<Form.Group>
						<p>
							Already have an account? <a href='/login'>Log In</a>
						</p>
					</Form.Group>
				</Form>
			</div>
		</div>
	);
};

export default SignUp;
