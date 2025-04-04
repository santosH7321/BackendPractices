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
    }
    Data.push(newUser); 
    res.status(201).json({ message: "User created successfully" });
})





// * 3. PUT: ( Update all files)

app.put('/api/v1/users/:id', (req, res) => {
    const { body, params: {id}} = req;
    const parasId = parseInt(id);
    const userIndex = Data.findIndex(user => user.id === parasId);
    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }
    Data[userIndex] = { id: parasId, ...body };
    res.json({ message: "User updated successfully" });
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})