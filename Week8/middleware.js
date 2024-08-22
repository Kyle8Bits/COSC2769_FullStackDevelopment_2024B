const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 2222;

app.use(cors());

function browserInformation(req, res, next) {
  console.log( "User-Agent" ,req.headers["user-agent"]);
  next();
}

function auth(req, res, next) {
  res.status(403).send("Access to this route is forbidden");
}

app.use(browserInformation);

app.use("/secret", auth);

app.all("*", (req, res) => {
  res.json({ message: "connected to server" });
});

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});
