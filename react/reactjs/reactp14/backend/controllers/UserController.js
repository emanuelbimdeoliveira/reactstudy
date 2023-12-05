const User = require("../models/User")

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const jwtSecret = preocess.env.JWT_SECRET;

// generate user token
const generateToken = (id) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: "7d"
    })
}

const register = async (req, res) => {
    res.send("Registro");
}

module.exports = {
    register,
}

