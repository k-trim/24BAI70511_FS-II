function TaskCard(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>{props.task.title}</h3>
      <p>Description : {props.task.description}</p>
      <p>Priority : {props.task.priority}</p>
      <p>Deadline : {props.task.deadline}</p>
      <p>Status : {props.task.completed ? " Completed" : " Pending"}</p>



      <p>Hello, {props.studentName}</p>
      <button onClick={() => props.toggleTask(props.task.id)}>Complete</button>
      <button onClick={() => props.editTask(props.task.id)}>Edit</button>
      <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;