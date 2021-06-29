const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/users");
const userRouter = require("./routes");

const app = express();
app.use(express.json());
app.use("/users", userRouter)

mongoose.connect("mongodb://localhost:27017/signup", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, ()=>{ 
  console.log("listening to port 3000");
});
