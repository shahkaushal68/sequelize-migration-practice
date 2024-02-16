const express = require('express');
const router = express.Router();


const authRouter = require("./v1/authRoute");

// middleware that is specific to this router
router.use("/v1/auth", authRouter);



module.exports = router