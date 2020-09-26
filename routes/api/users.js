const express = require("express");
const router = express.Router();

// Register user route api/users -- Public route
router.post("/", (req, res) => {
  console.log(req.body);
  res.send("User route");
});

module.exports = router;
