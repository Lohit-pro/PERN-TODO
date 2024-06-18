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
app.get('/todos', async (req,res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");

        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message)
    }
})

// get a todo
app.get('/todo/:id', async (req,res) => {
    try {
        const id = req.params["id"];
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id=($1)", [id]);

        res.json(todo.rows);
    } catch (err) {
        console.error(err.message)
    }
})

// update a todo
app.put('/todos/:id', async (req,res) => {
    try {
        const id = req.params["id"];
        const description = req.body["description"];
        const updatedTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description,id]);

        res.json(updatedTodo);
    } catch (err) {
        console.error(err.message)
    }
})

// delete a todo
app.delete('todos/:id', async (req,res) => {
    try {
        const id = req.params["id"];
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);

        res.json("Todo deleted!")
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(5000, () => {
    console.log("Server started at port 5000!")
})