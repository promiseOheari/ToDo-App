import React from 'react'
import prom from "./todo.module.css"
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import EditTodoForm from '../TodoFormEdit/EditTodoForm';

// function Todo({task, toggleComplete, deleteTodo, editTodo}) {
  function Todo({task }) {
  return (

  //   <div className={task.completed ? 'completed' : ''} onClick={() => toggleComplete(task.id)}>
  //   {task.task}
  // </div>

    <div className={prom.todo}>
        {/* <p className={task.completed ? 'completed' : ''}
         onClick={() => toggleComplete(task.id)}
         style={{ textDecoration: task.completed ? 'line-through' : 'none',
         color: task.completed ? 'red' : 'white' }}
         >{task.task}</p> */}
         <p>add here</p>

        <div className='flex items-center'>
        <RiDeleteBin6Line className='mr-[10px] size-[24px]' 
        // onClick={()=>{
        //   editTodo(task.id)
        // }} 
        />
        <FaRegEdit className=' size-[24px]'
        //  onClick={()=>{
        //   deleteTodo(task.id)}}
          />
        </div>
      
    </div>
  )
}

export default Todo