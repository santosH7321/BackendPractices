import express from 'express';
import { Data } from './data.js';

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(PORT, (err, res) => {
    console.log(`Server is running on http://localhost:${PORT}`);
});