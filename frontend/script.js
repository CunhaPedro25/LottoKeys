function generate() {
    const numberContainer = document.getElementById("numbers");
    const starContainer = document.getElementById("stars");
    numberContainer.innerHTML = "";
    starContainer.innerHTML = "";
    fetch("http://0.0.0.0:10000/api/")
        .then((response) => response.json())
        .then((data) => {
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