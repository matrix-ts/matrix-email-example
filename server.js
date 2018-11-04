/*jshint esversion: 6 */
/*jshint node: true */
"use strict";

const express = require("express");
const bodyParser = require("body-parser");

// var SparkPost = require("sparkpost");
// var sparky = new SparkPost();

// Initialize app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("docs"));

const events = [];

app.post("/matrix", (req, res) => {
	const message = req.body;

	saveEvent(message);
	// sendEmail();
	res.send("Done");
});

app.get("/events", (req, res) => {
	res.json(events);
});

var server = app.listen(process.env.PORT || 8080, function() {
	var port = server.address().port;
	console.log("Server now running on port", port);
});

function saveEvent(event) {
	events.push({
		action: event.action,
		project: event.project,
		itemRef: event.itemRef,
		time: event.after.date,
		title: event.after.title,
		modifiedBy: event.after.modifiedBy
	});
	console.info("New Events", events);
}

// function sendEmail() {
// 	sparky.transmissions
// 		.send({
// 			options: {
// 				sandbox: true
// 			},
// 			content: {
// 				from: "testing@" + process.env.SPARKPOST_SANDBOX_DOMAIN, // 'testing@sparkpostbox.com'
// 				subject: "A change happened!",
// 				html:
// 					"<html><body><p>Testing SparkPost - the world's most awesomest email service!</p></body></html>"
// 			},
// 			recipients: [{ address: "sparkbox@tilmans.space" }]
// 		})
// 		.then(data => {
// 			console.log("Woohoo! You just sent your first mailing!");
// 			console.log(data);
// 		})
// 		.catch(err => {
// 			console.log("Whoops! Something went wrong");
// 			console.log(err);
// 		});
// }
