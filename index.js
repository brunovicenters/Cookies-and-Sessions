const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("thisismmysecret"));

app.get("/greet", (req, res) => {
  const { name = "anonymous" } = req.cookies;
  res.send(`Het there, ${name}`);
});

app.get("/setname", (req, res) => {
  res.cookie("name", "stevie chicks");
  res.send("Ok, sent you a cookie");
});

app.get("/getsignedcookie", (req, res) => {
  res.cookie("fruit", "grape", { signed: true });
  res.send("Ok, signed your cookie fruit");
});

app.get("/verifyfruit", (req, res) => {
  res.send(req.signedCookies);
});

app.listen(3000, () => {
  console.log("Serving!");
});
