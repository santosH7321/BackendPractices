import express from 'express';
// import { Data } from './data.js';

const app = express();

// app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/hello', (req, res) => {
    res.send('Hello from hello route');
})
app.get('/test', (req, res) => {
    res.send('Hello from test route');
})
app.listen(PORT, (err, res) => {
    console.log(`Server is running on http://localhost:${PORT}`);
});