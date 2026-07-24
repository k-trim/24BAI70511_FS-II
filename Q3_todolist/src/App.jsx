import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    "Walk the dog",
    "Water the plants",
    "Wash the dishes",
  ]);
  
  const addTask = () => {
    if (task.trim() === "") {
        return;
    }
    setTasks([...tasks, task]);
    setTask("");
  }

  const delTask = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  return (
    <>
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder="Add your task" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Submit</button>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => delTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default App