function generate(): void {
    // Type assertions for the elements (assuming they exist in the DOM)
    const numberContainer = document.getElementById("numbers") as HTMLElement;
    const starContainer = document.getElementById("stars") as HTMLElement;

    // Clear the containers
    numberContainer.innerHTML = "";
    starContainer.innerHTML = "";

    fetch("http://localhost:8080")
        .then((response: Response) => response.json())
        .then((data: { numbers: number[], stars: number[] }) => {
            // Ensure data is typed with arrays of numbers
            const numberContent: string = data.numbers
                .map((element: number) => `<div>${element}</div>`)
                .join("");

            const starContent: string = data.stars
                .map((element: number) => `<div>${element}</div>`)
                .join("");

            numberContainer.innerHTML = numberContent;
            starContainer.innerHTML = starContent;
        })
        .catch((err: Error) => {
            console.log(err);
        });
}
