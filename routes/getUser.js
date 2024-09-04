const { User } = require("../models/user");

const router = require("express").Router();

// Get user details by email using query parameter
router.get("/email", async (req, res) => {
	try {
		const email = req.query.email;
		if (!email) {
			return res.status(400).send({ message: "Email is required" });
		}

		const user = await User.findOne({ email }).select("-password");
		if (!user)
			return res.status(404).send({ message: "User not found!" });

		res.status(200).send(user);
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
