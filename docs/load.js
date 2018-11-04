window.addEventListener("load", function() {
	loadEvents(document.getElementById("list"));
});

function loadEvents(element) {
	fetch("/events")
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			console.info("Event Updates", json)
			updateTable(element, json);
		})
		.finally(function() {
			setTimeout(function() {
				loadEvents(element);
			}, 500);
		});
}

function updateTable(element, events) {
	var newRows = document.createElement("tbody");
	for (var i = 0; i < events.length; i++) {
		var row = newRows.insertRow();
		row.insertCell().appendChild(document.createTextNode(events[i].time));
		row.insertCell().appendChild(document.createTextNode(events[i].action));
		row.insertCell().appendChild(
			document.createTextNode(events[i].project)
		);
	}
	element.parentNode.replaceChild(newRows, element);
}
