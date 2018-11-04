window.addEventListener("load", function() {
	var list = document.getElementById("list");
	loadEvents(list);
});

function loadEvents(element) {
	fetch("http://example.com/movies.json").then(function(response) {
		console.info("JSON", response.json());
	});
}
