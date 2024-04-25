import logo from './logo.svg';
import prom from './App.module.css';
import TodoForm from './Components/ToDoForm/TodoForm';
import TodoWrapper from './Components/TodoWrapper/TodoWrapper';

function App() {
  return (
    <div className={prom.App}>
     <TodoWrapper/>
    </div>
  );
}

export default App;
