const express = require("express");
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.listen(3000)

// routes
app.get("/", (req, res) => {
    res.json({message: "1 route"})
})

app.post("/createproduct", (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    res.json({message: `${name}, ${price}`})
})