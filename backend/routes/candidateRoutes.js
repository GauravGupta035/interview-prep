const express = require("express");
const router = express.Router();
const {
	registerCandidate,
	loginCandidate,
	getMe,
} = require("../controllers/candidateController");

const { protect } = require("../middlewares/authMiddleware");

router.post("/", registerCandidate);
router.post("/login", loginCandidate);
router.get("/me", protect, getMe);

module.exports = router;
