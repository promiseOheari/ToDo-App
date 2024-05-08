import React, { useState } from 'react'
import prom from "./todoForm.module.css"

function TodoForm({AddToDo}) {
const [inputs, setInput]= useState("")

const handleSubmit = (e)=>{
e.preventDefault();
AddToDo(inputs)
setInput("")
// console.log(inputs)
}
 
  return (
    <form className={prom.todoForm} onSubmit={handleSubmit}>
      
        <input type='text' value={inputs} placeholder='what is your task for today?'className={prom.todoInput} onChange={(e)=>{
            setInput(e.target.value)
            console.log(inputs)
        }} />
        <button type='submit' className={prom.formBtn}>Add</button>
      
    </form>
  )
}

export default TodoForm