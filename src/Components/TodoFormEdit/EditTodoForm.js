// import React, { useState } from 'react'
// import prom from "../ToDoForm/todoForm.module.css"

// function EditTodoForm({editToDo, task}) {
// const [inputs, setInput] = useState(task.task);

// const handleSubmit = (e)=>{
// e.preventDefault();
// editToDo(inputs, task.id)
// setInput("")
// console.log(inputs)
// }
 
//   return (
//     <form className={prom.todoForm} onSubmit={handleSubmit}>
      
//         <input type='text' value={inputs} placeholder='update Task'className={prom.todoInput} onChange={(e)=>{
//             setInput(e.target.value)
//             console.log(inputs)
//         }} />
//         <button type='submit' className={prom.formBtn}>update Task</button>
      
//     </form>
//   )
// }

// export default EditTodoForm