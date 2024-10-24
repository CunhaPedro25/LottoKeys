function generate(): void {
    const numberContainer = document.getElementById("numbers") as HTMLElement;
    const starContainer = document.getElementById("stars") as HTMLElement;

    numberContainer.innerHTML = "";
    starContainer.innerHTML = "";

    fetch("http://0.0.0.0:10000/api/")
        .then((response: Response) => response.json())
        .then((data: { numbers: number[], stars: number[] }) => {

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
