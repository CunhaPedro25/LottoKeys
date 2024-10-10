function generate() {
    // Type assertions for the elements (assuming they exist in the DOM)
    var numberContainer = document.getElementById("numbers");
    var starContainer = document.getElementById("stars");
    // Clear the containers
    numberContainer.innerHTML = "";
    starContainer.innerHTML = "";
    fetch("http://localhost:8080")
        .then(function (response) { return response.json(); })
        .then(function (data) {
        // Ensure data is typed with arrays of numbers
        var numberContent = data.numbers
            .map(function (element) { return "<div>".concat(element, "</div>"); })
            .join("");
        var starContent = data.stars
            .map(function (element) { return "<div>".concat(element, "</div>"); })
            .join("");
        numberContainer.innerHTML = numberContent;
        starContainer.innerHTML = starContent;
    })
        .catch(function (err) {
        console.log(err);
    });
}
