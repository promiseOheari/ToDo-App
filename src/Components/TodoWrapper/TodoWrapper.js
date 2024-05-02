import React, { useState } from 'react'
import TodoForm from '../ToDoForm/TodoForm'
import prom from "./wrapper.module.css"
import "./wrapper.css"
import editTodoForm from '../TodoFormEdit/EditTodoForm'
// import editTodoForm from '../TodoFormEdit/TodoFormEdit'
// import "./wrapper.module.css"
import Todo from '../ToDo/Todo';
import {v4 as uuidv4} from "uuid"
uuidv4();

function TodoWrapper() {
const [todos, setTodos]=useState([])

const AddTodo =(todo)=>{
    setTodos([...todos, {id:uuidv4(), task:todo, completed:false, isEditing:false} ])
    console.log(todos, "hello")
}


// const toggleComplete = id => {
//   setTodos = ([todos.map(todo => todo.id=== id? {...todo,completed : !todo.completed} :todo)])
// }

const toggleComplete = id => {
  const updatedTodos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  console.log(updatedTodos); // Check the updated todos array
  setTodos(updatedTodos); // Update the state
};


// const deleteTodo =(id)=>{
//   setTodos(todos.filter(todo => todo.id==!id ()))
// }

// const editTodo = (id) =>{
//   setTodos(todos.map(todo => todo.id === !id? {...todo, isEditing: !todo.isEditing}: todo))
// }


  return (
    <div className={prom.wrap}>
        <h1>wrapper</h1>
         <TodoForm AddToDo={AddTodo}/>
         {todos.map((items, index)=>{
          items.isEditing?(<editTodoForm/>):(

              <Todo task={items} key={index} 
              toggleComplete={toggleComplete} 
              // deleteTodo={deleteTodo}
              // editTodo={editTodo}
              />
             
            )

         })}
         
    </div>
  )
}

export default TodoWrapper