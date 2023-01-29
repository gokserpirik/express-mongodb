"use strict";

var express = require("express");
var mongocreate = require("./db/mongo");
var path = require("path");
const mongoose = require('mongoose');
const User = require('./db/User');
require('dotenv').config()

const mongourl = process.env.MONGO_URL;

mongoose.set('strictQuery', false);
mongoose.connect(mongourl, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("Connected to DB");
}, e=>{
    console.log("Error connecting to DB");
}
);

var app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/search/:query?", function (req, res) {
  var query = req.params.query;
  User.find({name: query}, async function (err, vals) {
    const result = await vals;
    const balance = (result.length > 0) ? await result[0].balance : "Not found";

    if (err) return res.send(500);
    res.send(`${balance}`);
  });
});


app.get("/pay/:query?", function (req, res) {
  var query = req.params.query;
  User.findOne({name: query}, async function (err, vals) {
    const result = await vals;
    const balance = 0;
    result.balance = balance;
    await result.save();

    if (err) return res.send(500);
    res.send(`paid`);
  });
});


app.get("/create/:query?", function (req, res) {
  var query = req.params.query;
  mongocreate.createUser({
    nameof: query,
    completed: false,
    age: 20,
    hobbies: ["sports", "cooking"],
    password: "123456",
    balance: 100,

  })
  res.send("created new user");
  if (err) return res.send(500);
});


app.get("/add/:query?", function (req, res) {
  var query = req.params.query;
  mongocreate.addBalance({ name: query, balance: 100 });
  res.send("added");
  if (err) return res.send(500);
});


app.get("/client.js", function (req, res) {
  res.sendFile(path.join(__dirname, "client.js"));
});


app.listen(3000);
console.log("Express started on port 3000");
