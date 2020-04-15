require("dotenv").config();
const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const redis = require("redis");
const redisClient = redis.createClient();
const redisStore = require("connect-redis")(session);
const passport = require("./auth/passport");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const mailerRoutes = require("./routes/mailer");

redisClient.on("error", (err) => {
  console.log(`Redis error: ${err}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    store: new redisStore({
      host: "localhost",
      port: 6379,
      client: redisClient,
      ttl: 259200,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3 * 24 * 60 * 60 * 1000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api", mailerRoutes);

app.listen(port, () => console.log(`Server listening on ${port}`));
