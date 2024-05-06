import React from 'react'
import prom from "./todo.module.css"
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import EditTodoForm from '../TodoFormEdit/EditTodoForm';

  function Todo({task, toggleComplete, deleteTodo, editTodo }) {
  return (

  

    <div className={prom.todo}>
        <p className={task.completed ? 'completed' : ''}
         onClick={() => toggleComplete(task.id)}
         style={{ textDecoration: task.completed ? 'line-through' : 'none',
         color: task.completed ? 'red' : 'white' }}
         >{task.task}</p> 


        <div className='flex items-center'>
        <FaRegEdit className='mr-[10px] size-[24px]' 
        onClick={()=>{
          editTodo(task.id)
        }} 
        />
        <RiDeleteBin6Line className=' size-[24px] hover:text-[red] transition-all duration-[0.90s] ease-in-out'
         onClick={()=>{
          deleteTodo(task.id)}}

          />
        </div>
      
    </div>
  )
}

export default Todo