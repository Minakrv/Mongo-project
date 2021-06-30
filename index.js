const express = require("express"); 
const mongoose = require("mongoose"); 
const User = require("./moduls/users");
const app = express(); 
const movieRouter = require("./routes/movie");


const registerRouter = require("./routes/register");
const userRouter = require("./routes/user");
require("dotenv").config(); 

const port = process.env.PORT || 5000; 

const server = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/signup", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Server is connected"); 
    } catch (err) {
        console.log(err);
    }
};

server(); 

app.use(express.json()); 
app.use("/movie", movieRouter);
app.use("/register", registerRouter);
app.use("/user", userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});

app.get("/", async(req, res) => { 
    res.send("<h1>Hello Mina</h1>")
})