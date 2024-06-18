const express = require("express");
const cors = require("cors");
const app = express();
const pool = require('./db.js');

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

// create a todo
app.post('/todos', async (req,res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// get all todos
app.get('/allTodos', async (req,res) => {
    try {
        const todos = await pool.query("SELECT * FROM todo;");
        const allTodos = todos.rows[0];

        res.json(allTodos);
    } catch (err) {
        console.error(err.message)
    }
})

// get a todo

// update a todo

// delete a todo

app.listen(5000, () => {
    console.log("Server started at port 5000!")
})