window.addEventListener("load", function() {
	var list = document.getElementById("list");
	loadEvents(list);
});

function loadEvents(element) {
	fetch("/events")
	.then(function(response) {
		console.info("JSON", response.json());
		updateTable(element, response.json())
	}).finally(function() {
		setTimeout(function(){loadEvents(element)}, 500)
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
