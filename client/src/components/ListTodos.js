import React, { useEffect, useState } from "react";

function ListTodos() {

    const [ todos, setTodos ] = useState([]); 

    const getTodos = async () => {
        try {
            const res = await fetch('http://localhost:5000/todos');
            const jsonData = await res.json();

            setTodos(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

  return (
    <div className="text-center mt-5">
      <h1>List of ToDo's</h1>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
        {todos.map(todo=> (
            <tr>
                <td>{todo.description}</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListTodos;
