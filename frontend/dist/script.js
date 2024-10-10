function generate() {
    // Type assertions for the elements (assuming they exist in the DOM)
    const numberContainer = document.getElementById("numbers");
    const starContainer = document.getElementById("stars");
    // Clear the containers
    numberContainer.innerHTML = "";
    starContainer.innerHTML = "";
    fetch("http://localhost:8080")
        .then((response) => response.json())
        .then((data) => {
        // Ensure data is typed with arrays of numbers
        const numberContent = data.numbers
            .map((element) => `<div>${element}</div>`)
            .join("");
        const starContent = data.stars
            .map((element) => `<div>${element}</div>`)
            .join("");
        numberContainer.innerHTML = numberContent;
        starContainer.innerHTML = starContent;
    })
        .catch((err) => {
        console.log(err);
    });
}
//# sourceMappingURL=script.js.map