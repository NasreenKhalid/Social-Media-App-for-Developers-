const express = require("express");
const router = express.Router();

// Test route api/auth -- Public route
router.get("/", (req, res) => res.send("Auth route"));

module.exports = router;