/*jshint esversion: 6 */

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/matrix", (req, res) => {
  // Do something with the request
  res.send("Done");
});

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("Server now running on port", port);
});
