const express = require("express");
const router = express.Router;
const User = require("./moduls/users");
const Movie = require("./moduls/movies")
const express = require("express"); 
const router = express.Router(); 



router.get("/", async(req, res) => {
    const users = await user.find({});
    res.status(200).json(users);
});

router.Post("/", (req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let user = new User({name:name, email:email, password:password});
    user.save;
    res.status(201).send("Its been created");
});

module.exports = router;