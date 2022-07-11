import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
import { register, reset } from "../../features/auth/authSlice";

import "./Register.scss";

const Register = () => {
	const [registerCredentials, setRegisterCredentials] = useState({
		name: "",
		email: "",
		password: "",
	});

	const { name, email, password } = registerCredentials;

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
		setRegisterCredentials((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handleLogin = () => {
		navigate("/login");
	};

	const submitCred = (event) => {
		event.preventDefault();

		const candidateData = {
			name,
			email,
			password,
		};

		dispatch(register(candidateData));
	};

	return (
		<div className='register-form'>
			<div className='form-container'>
				<Form onSubmit={submitCred}>
					<Form.Group>
						<h2>Sign Up</h2>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicName'>
						<Form.Label className='label'>Name</Form.Label>
						<Form.Control
							type='text'
							className='input'
							placeholder='John Doe'
							name='name'
							value={name}
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

					<button type='submit' className='register-btn'>
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

export default Register;
