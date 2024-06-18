import React, { useState } from 'react'

function InputTodo() {

    const [description, setDescription ] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            let body = {description};
            await fetch('http://localhost:5000/todos', {
                "method": "POST",
                "headers": {"Content-Type": "application/json"},
                "body": JSON.stringify(body)
            });

            window.location('/');
        } catch (err) {
            console.error(err.message)
        }
    }

  return (
    <div>
        <h1 className='text-center mt-5'>PERN - TODO List</h1>
        <form className='d-flex mt-3' onSubmit={onSubmitForm}>
            <input type='text' className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className='btn btn-success mx-2'>Add</button>
        </form>
    </div>
  )
}

export default InputTodo