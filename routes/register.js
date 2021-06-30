const express = require("express"); 
const router = express.Router(); 
const User = require("../moduls/users");


router.post("/", (req, res) => {
    try {
        let user = new User({
            name: req.body.name, 
            email: req.body.email, 
            password: req.body.password
        });
        user.save(); 
        res.status(201).send("New User Created");
    } catch (err) {
        res.status(400).send(`Error: ${err}`);
    }
});

module.exports = router;