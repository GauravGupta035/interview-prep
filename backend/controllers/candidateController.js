const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const Candidate = require("../models/candidateModel");

// @desc	Register new candidate
// @route	POST /api/candidates
// @access 	Public
const registerCandidate = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		res.status(400);
		throw new Error("Please add all fields");
	}

	// Check if candidate exists
	const candidateExists = await Candidate.findOne({ email });

	if (candidateExists) {
		res.status(400);
		throw new Error("Candidate already exists");
	}

	// Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	// Create candidate
	const candidate = await Candidate.create({
		name,
		email,
		password: hashedPassword,
	});

	if (candidate) {
		res.status(201).json({
			_id: candidate.id,
			name: candidate.name,
			email: candidate.email,
			token: generateToken(candidate._id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

// @desc    Authenticate a candidate
// @route   POST /api/candidates/login
// @access  Public
const loginCandidate = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	// Check for user email
	const candidate = await Candidate.findOne({ email });

	if (candidate && (await bcrypt.compare(password, candidate.password))) {
		res.json({
			_id: candidate.id,
			name: candidate.name,
			email: candidate.email,
			token: generateToken(candidate._id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid credentials");
	}
});

// @desc    Get candidate data
// @route   GET /api/candidates/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
	const { _id, name, email } = await Candidate.findById(req.user.id);

	res.status(200).json({
		id: _id,
		name,
		email,
	});
});

// Generate JWT
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});
};

module.exports = {
	registerCandidate,
	loginCandidate,
	getMe,
};
