const express = require("express");
const { dirname } = require("path");
const path = require("path");

const app = express();

const today = new Date();
const hour = today.getHours();
const day = today.getDay();

//css
app.use(express.static(__dirname + "/public/"));
app.use(express.static(__dirname + "/public/service.css"));
app.use(express.static(__dirname + "/public/contact.css"));
app.use(express.static(__dirname+  "/public/close.css"));

// close and open time

app.get("/home", (req, res) => {
  if (hour < 9 || hour > 17 || 0 == day || day == 6) {
    res.sendFile(path.join(__dirname, "public", "close.html"));
  } else {
    res.sendFile(path.join(__dirname, "public", "home.html"));
  }
});
app.get("/service", (req, res) => {
  if (hour < 9 || hour > 17 || 0 == day || day == 6) {
    res.sendFile(path.join(__dirname, "public", "close.html"));
  } else {
    res.sendFile(path.join(__dirname, "public", "service.html"));
  }
});
app.get("/contact", (req, res) => {
  if (hour < 9 || hour > 17 || 0 == day || day == 6) {
    res.sendFile(path.join(__dirname, "public", "close.html"));
  } else {
    res.sendFile(path.join(__dirname, "public", "contact.html"));
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`);
});
