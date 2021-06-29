const express = require("express"); 
const mongoose = require("mongoose"); 
const User = require("./models/user");
const app = express(); 
const userRouter = require("./routes");
require("dotenv").config(); 

app.use(express.json()); 
app.use("/users", userRouter); 

const port = process.env.PORT || 5000; 

const server = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/signup", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("it is connected"); 
    } catch (err) {
        console.log(err);
    }
};

server(); 

const user = new User({
    name: "Mina",
    email: "mnkrv@yahoo.com", 
    password: "Leo"
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});

app.get("/", async (req, res) => {
    await user.save(); 
    res.send("<h1>Hello World</h1>")
})