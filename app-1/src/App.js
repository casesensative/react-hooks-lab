import { useState } from 'react';
import './App.css';
import AddToDo from './components/AddTodo';
import List from './components/List';


function App() {
  const [todolist, setTodolist] = useState([]);
  
  return (
    <div className="App">
      <AddToDo setToDoListFn={setTodolist} todolist={todolist} />
      <List setTodolistFn={setTodolist} todolist={todolist} />
    </div>
  );
}

export default App;
