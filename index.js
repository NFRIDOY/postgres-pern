//npm i express cors dotenv
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
// import { pool } from './db'; // TODO: HANDLE error 
const { v4: uuidv4 } = require('uuid');


// req 
app.use(express.json());
// app.use(cors())
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}));

// Create a books
app.post('/books', (req, res) => {
    try {
        const book = req.body;
        const { title, author } = book;
        const id = uuidv4(); 
        res.status(201).json({ message: `a book created. \n id: ${id}, Title: ${title}, Author: ${author}` })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

// Read the books
app.get('/books', (req, res) => {
    try {
        res.status(200).json({ message: 'books found' })
        // res.send({message: 'books found'});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})
app.get('/', (req, res) => {
    res.send('Postgres Server Is On')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`)
})