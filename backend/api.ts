// @ts-ignore
import http from "http";

const port = 8080
const host = "localhost"

function generateArray(size: number, max: number): number[]{
    let numbers: Set<number> = new Set()

    do{
        numbers.add(Math.floor(Math.random() * max) + 1)
    }while(numbers.size < size)

    return Array.from(numbers.values())
}

const requestListener = function (req: any, res: any) {

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);

    res.end(`{"numbers": [${generateArray(5, 50)}], "stars": [${generateArray(2, 12)}]}`);
};

const server = http.createServer(requestListener)
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});