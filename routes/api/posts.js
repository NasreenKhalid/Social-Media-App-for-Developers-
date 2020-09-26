const express = require("express");
const router = express.Router();

// Test route api/posts -- Public route
router.get("/", (req, res) => res.send("Posts route"));

module.exports = router;
