const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/interviewprepDB", {
	useNewUrlParser: true,
});
// const conn = mongoose.connection;

const userSchema = mongoose.Schema({
	user: {
		type: mongoose.Types.ObjectId,
		ref: "User",
	},

	// Personal Info
	name: {
		type: String,
		required: [true, "Name is required!"],
	},
	email: {
		type: String,
		required: [true, "Email is required!"],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Password is required!"],
		select: false,
	},
});

// conn.once("open", () => {
// 	console.log("MongoDB database connection successfully established");
// });

userSchema.pre("save", async (next) => {
	this.password = await bcrypt.hash(this.password, 8);

	next();
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
