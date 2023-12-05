const express = requite("express")
const router = express.Router()

// controller
const { register } = require("../controllers/UseController");

// middlewares
const validate = require("../middlewares/handleValidation")
const { userCreateValidation } = require("../middlewares/userValidation")

// router
router.post("/register", userCreateValidation(), validate, register);

module.exports = router;