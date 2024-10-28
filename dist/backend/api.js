function generateArray(size, max) {
    let numbers = new Set();
    do {
        numbers.add(Math.floor(Math.random() * max) + 1);
    } while (numbers.size < size);
    return Array.from(numbers.values());
}
const api = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.end(`{"numbers": [${generateArray(5, 50)}], "stars": [${generateArray(2, 12)}]}`);
};
module.exports = {
    api
};
