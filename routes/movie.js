const express = require("express"); 
const router = express.Router(); 
const Movie = require("../moduls/movies");
const User = require("../moduls/users");

router.post("/", async (req, res) => {
    try {
        const movie = new Movie({
            name: req.body.name, 
            yera: req.body.yera,
            type: req.body.type,
            contry: req.body.userId
        });
        await movie.save();
        const user = await User.findById({_id: movie.contry});
        user.favouriteMovie.push(movie);
        await user.save();
        res.status(201).send(`New Artist Added to Your List: ${movie}`);
    } catch (err) {
        res.status(400).send(`Error: ${err}`)
    }
});

module.exports = router;