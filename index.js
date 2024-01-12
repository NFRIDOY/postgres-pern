//npm i express cors dotenv
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

// req 
app.use(express.json());
// app.use(cors())
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}));

app.get('/books', (req, res) => {
    res.status(200).json({message: 'books found'})
    // res.send({message: 'books found'});
})
app.get('/', (req, res) => {
    res.send('Postgres Server Is On')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`)
})