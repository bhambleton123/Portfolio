require("dotenv").config();
const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const userRoutes = require("./routes/user");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressSession({ secret: process.env.SESSION_SECRET }));

app.use("/api", userRoutes);

app.listen(port, () => console.log(`Server listening on ${port}`));
