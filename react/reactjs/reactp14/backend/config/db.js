const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(`mongodb+srv://emanueldossantosbim:${dbPassword}@cluster0.7d2npwx.mongodb.net/?retryWrites=true&w=majority`)
    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn;