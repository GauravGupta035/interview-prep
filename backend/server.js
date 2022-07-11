const express = require("express");
const { errorHandler } = require("./middlewares/errorMiddleware");
const dotenv = require("dotenv");
dotenv.config();
const colors = require("colors");
const connectDB = require("./config/db");

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/candidates", require("./routes/candidateRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

//            --------------- Angela Course -----------------
// require("dotenv").config();
// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const session = require("express-session");
// const ejs = require("ejs");
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");

// const app = express();

// app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: true }));

// // Session setup
// app.use(
// 	session({
// 		secret: "Our little secret.",
// 		resave: false,
// 		saveUninitialized: false,
// 	})
// );

// // Passport setup
// app.use(passport.initialize());
// app.use(passport.session());

// mongoose.connect("mongodb://localhost:27017/interviewDB");

// const candidateSchema = new mongoose.Schema({
// 	username: String,
// 	email: String,
// 	password: String,
// });

// candidateSchema.plugin(passportLocalMongoose);

// const Candidate = new mongoose.model("Candidate", candidateSchema);

// passport.use(Candidate.createStrategy());

// passport.serializeUser(Candidate.serializeUser());
// passport.deserializeUser(Candidate.deserializeUser());

// app.get("/", (req, res) => {
// 	if (req.isAuthenticated()) {
// 		res.render("/");
// 	} else {
// 		res.redirect("login");
// 	}
// });

// app.get("/login", (req, res) => {
// 	res.render("login");
// });

// app.get("/signup", (req, res) => {
// 	res.render("signup");
// });

// app.post("/signup", (req, res) => {
// 	Candidate.register(
// 		{ username: req.body.username, email: req.body.email },
// 		req.body.password,
// 		function (err, candidate) {
// 			if (err) {
// 				console.log(err);
// 				res.redirect("/signup");
// 			} else {
// 				passport.authenticate("local")(req, res, function () {
// 					res.redirect("/");
// 				});
// 			}
// 		}
// 	);
// });

// app.post("/login", (req, res) => {
// 	const candidate = new Candidate({
// 		username: req.body.username,
// 		email: req.body.email,
// 		password: req.body.password,
// 	});

// 	req.login(candidate, function (err) {
// 		if (err) {
// 			console.log(err);
// 			res.render("/login");
// 		} else {
// 			passport.authenticate("local")(req, res, function () {
// 				res.redirect("/");
// 			});
// 		}
// 	});
// });

// app.listen(5000, function () {
// 	console.log("Server started on port 5000");
// });
