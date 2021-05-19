import { useState } from 'react';

const AddToDo = ({setToDoListFn, todolist}) => {

  const [input, setInput] = useState('');

  const inputHandler = (text) => {
    setInput(text);
    console.log(input);
  }

  const setToDo = () => {
    setToDoListFn([...todolist, input]);
    setInput('');
  }


  return (
    <div className="addtodo">
      <input type='text' placeholder='...enter to do' value={input} onChange={(e) => inputHandler(e.target.value)} />
      <button onClick={() => setToDo()}>ADD</button>
    </div>
  )
}

export default AddToDo