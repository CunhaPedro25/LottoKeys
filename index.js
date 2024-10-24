"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const { api } = require('./backend/api');
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, 'frontend')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'frontend', 'index.html'));
});
app.get('/api/', api);
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});
const port = 10000;
const host = "0.0.0.0";
app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
//# sourceMappingURL=index.js.map