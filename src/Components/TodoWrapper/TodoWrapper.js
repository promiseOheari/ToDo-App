import React, { useState } from 'react'
import TodoForm from '../ToDoForm/TodoForm'
import prom from "./wrapper.module.css"
import {v4 as uuidv4} from "uuid"
uuidv4();

function TodoWrapper() {
const [todos, setTodos]=useState([])
const AddTodo =(todo)=>{
    setTodos([...todos, {id:uuidv4(), task:todos, completed:false, isEditing:false} ])
    console.log(todos)
}

  return (
    <div className={prom.wrap}>
        <h1>wrapper</h1>
         <TodoForm AddToDo={AddTodo}/>
    </div>
  )
}

export default TodoWrapper