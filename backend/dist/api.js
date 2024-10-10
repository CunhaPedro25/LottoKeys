"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const http_1 = __importDefault(require("http"));
const port = 8080;
const host = "localhost";
function generateArray(size, max) {
    let numbers = new Set();
    do {
        numbers.add(Math.floor(Math.random() * max) + 1);
    } while (numbers.size < size);
    return Array.from(numbers.values());
}
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.end(`{"numbers": [${generateArray(5, 50)}], "stars": [${generateArray(2, 12)}]}`);
};
const server = http_1.default.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
//# sourceMappingURL=api.js.map