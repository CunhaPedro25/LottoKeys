import express from "express";
import path from "path";
const { api } = require('./backend/api');

const app = express();

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
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
