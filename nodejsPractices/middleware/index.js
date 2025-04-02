import express from 'express';

const app = express();

app.use(express.json());

const PORT = 3000;

// middleware
function sayhello(req, res, next) {
    console.log('Hello from middleware');
    next();
}
// app.use(sayhello);


// specific middleware
app.get('/', sayhello, (req, res) => {
    res.send('Hello World');
});

app.get('/api/v1/users', (req, res) => {
    res.send('Hello from users route');
})

app.listen(PORT,(req, res)=>{
    console.log(`Server is running on port ${PORT}`);
 });

