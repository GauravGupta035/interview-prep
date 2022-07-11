const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please add name"],
		},
		email: {
			type: String,
			required: [true, "Please add email"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Please add password"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Candidate", candidateSchema);
