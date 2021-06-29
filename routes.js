const express = require("express");
const router = express.Router;
const User = require("./moduls/users");
const Movie = require("./moduls/movies")
const app = express();



router.get("/", (req,res) => {
    res.status(200).send("<h1>Mangoose</h1>");

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