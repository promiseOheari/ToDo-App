import React, { useState } from 'react'
import prm from "./edit.module.css"

function EditTodoForm({editTodo, task}) {
const [inputs, setInput] = useState(task.task);

const handleSubmit = (e)=>{
e.preventDefault();
editTodo(inputs, task.id)
setInput("")
console.log(inputs, "ffggg")
}
 
  return (
    <form className={prm.todoForm} onSubmit={handleSubmit}>
      
        <input type='text' value={inputs} placeholder='update Task' className={prm.todoInput} onChange={(e)=>{
            setInput(e.target.value)
            console.log(inputs)
        }} />
        <button type='submit' className={prm.formBtn}>Update</button>
      
    </form>
  )
}

export default EditTodoForm