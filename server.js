/*jshint esversion: 6 */
/*jshint node: true */
'use strict';

const express = require("express");
const bodyParser = require("body-parser");

var SparkPost = require("sparkpost");
var sparky = new SparkPost();

// Initialize app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('docs'));


app.post("/matrix", (req, res) => {
	sparky.transmissions
		.send({
			options: {
				sandbox: true
			},
			content: {
				from: "testing@" + process.env.SPARKPOST_SANDBOX_DOMAIN, // 'testing@sparkpostbox.com'
				subject: "A change happened!",
				html:
					"<html><body><p>Testing SparkPost - the world's most awesomest email service!</p></body></html>"
			},
			recipients: [{ address: "sparkbox@tilmans.space" }]
		})
		.then(data => {
			console.log("Woohoo! You just sent your first mailing!");
			console.log(data);
		})
		.catch(err => {
			console.log("Whoops! Something went wrong");
			console.log(err);
		});
	res.send("Done");
});

var server = app.listen(process.env.PORT || 8080, function() {
	var port = server.address().port;
	console.log("Server now running on port", port);
});
