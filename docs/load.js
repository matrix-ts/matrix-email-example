window.addEventListener("load", function() {
	var list = document.getElementById("list");
	loadEvents(list);
});

function loadEvents(element) {
	fetch("/events").then(function(response) {
		console.info("JSON", response.json());
	});
}
