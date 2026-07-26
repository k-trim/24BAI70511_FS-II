import { useReducer, useState } from "react";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import taskReducer from "../reducers/taskReducer";
import useLocalStorage from "../hooks/useLocalStorage";

function Tasks() {

  const [savedTasks, saveTasks] = useLocalStorage("tasks", []);

  const [tasks, dispatch] = useReducer(taskReducer, savedTasks);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const studentName = localStorage.getItem("name");

  function addTask() {

    if (title === "") {
      alert("Enter Task Title");
      return;
    }

    const task = {
      id: Date.now(),
      title: title,
      description: description,
      priority: priority,
      completed: false,
      deadline: deadline
    };

    dispatch({
      type: "ADD_TASK",
      payload: task
    });

    saveTasks([...tasks, task]);
    setTitle("");
    setDescription("");
    setPriority("");
    setDeadline("");
  }

  function deleteTask(id) {

    const newTasks = tasks.filter((task) => task.id !== id);
    dispatch({
      type: "DELETE_TASK",
      payload: id
    });
    saveTasks(newTasks);
  }

  function toggleTask(id) {

    const updated = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    });

    dispatch({
      type: "TOGGLE_TASK",
      payload: id
    });

    saveTasks(updated);
  }

  function editTask(id) {
    const newTitle = prompt("Enter New Title");
    if (!newTitle) return;

    const updated = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title: newTitle
        };
      }
      return task;
    });

    dispatch({
      type: "UPDATE_TASK",
      payload: updated.find((task) => task.id === id)
    });
   saveTasks(updated);
  }
  let displayTasks = tasks;
  if (search !== "") {
    displayTasks = displayTasks.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (filter === "Completed") {
    displayTasks = displayTasks.filter((task) => task.completed);
  }

  if (filter === "Pending") {
    displayTasks = displayTasks.filter((task) => !task.completed);
  }

  displayTasks.sort(
    (a, b) => new Date(a.deadline) - new Date(b.deadline)
  );

  return (
    <div>

      <Navbar />
      <h2>Task Manager</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />  <br />

      <input
        type="text"
        placeholder="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <br /><br />

      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <br /> <br />
      <button onClick={addTask}>Add Task</button>
      <hr />

      <input
        type="text"
        placeholder="Search Task"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br /><br />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>All</option>
        <option>Completed</option>
        <option>Pending</option>
      </select>

      <hr />
      <TaskList
        tasks={displayTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
        studentName={studentName}
      />



    </div>
  );
}

export default Tasks;