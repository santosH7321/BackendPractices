import express from 'express';
import { Data } from './data.js';

const app = express();
app.use(express.json());
const PORT = 3000;


app.get('/api/v1/users', (req, res) => {
    res.json(Data);
});
app.post('/api/v1/users', (req, res) => {
    const { name, age} = req.body;
    const newUser = {
        id: Data.length + 1,
        name,
        age
    };
    Data.push(newUser);
    res.status(201).send("User created successfully");
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})