import React, { useState } from 'react'
import TodoForm from '../ToDoForm/TodoForm'
import prom from "./wrapper.module.css"
import EditTodoForm from '../TodoFormEdit/EditTodoForm'
import Todo from '../ToDo/Todo';
import {v4 as uuidv4} from "uuid"
uuidv4();

function TodoWrapper() {
const [todos, setTodos]=useState([])

const AddTodo =(todo)=>{
    setTodos([...todos, {id:uuidv4(), task:todo, completed:false, isEditing:false} ])
    console.log(todos, "hello")
}


const toggleComplete = id => {
  const updatedTodos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  console.log(updatedTodos); 
  setTodos(updatedTodos); 
};


const deleteTodo =(id)=>{
  setTodos(todos.filter(todo => todo.id !== id))
}

const editTodo = (id) =>{
  setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
}

const editTask = ( task, id) =>{
  setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
}


  return (
    <div className={prom.wrap}>
        <h1 className='text-[#e4e4e4] text-[32px] py-[40px] font-semibold'>My Todo-List!!!</h1>
         <TodoForm AddToDo={AddTodo}/>
         {todos.map((todo, index)=>(
          todo.isEditing ? (
          <EditTodoForm  editTodo={editTask} task={todo} />
          ):( 

              <Todo task={todo} key={index} 
              toggleComplete={toggleComplete} 
              
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              />
     ) 
          ))}
         
    </div>
  )

        }
export default TodoWrapper