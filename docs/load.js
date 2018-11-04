window.addEventListener("load", function() {
	loadEvents();
});

function loadEvents(element) {
	fetch("/events")
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			updateTable(json);
		})
		.finally(function() {
			// setTimeout(function() {
			// 	loadEvents(element);
			// }, 500);
		});
}

function updateTable(events) {
	var list = document.getElementById("list");
	var newRows = document.createElement("tbody");
	for (var i = 0; i < events.length; i++) {
		var row = newRows.insertRow();
		row.insertCell().appendChild(document.createTextNode(events[i].time));
		row.insertCell().appendChild(document.createTextNode(events[i].action));
		row.insertCell().appendChild(
			document.createTextNode(events[i].project)
		);
	}
	list.parentNode.replaceChild(newRows, list);
}
