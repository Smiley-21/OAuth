
const Session = require("express-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");
const dotenv=require("dotenv");



const app = express();
dotenv.config();

app.use(
  Session({
    // name:"session",
    // keys:['secretkey','secretKey2'],
    maxAge:24*60*60*1000,
    secret: "keyboardcat",
    resave: false,
    saveUninitialized: true,
    cookie: {  },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen(5000, () => {
  console.log("Server is running");
});
