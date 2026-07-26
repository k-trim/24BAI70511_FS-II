import TaskCard from "./TaskCard";

function TaskList(props) {
  return (
    <div>
      {props.tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={props.deleteTask}
          toggleTask={props.toggleTask}
          editTask={props.editTask}
          studentName={props.studentName}
        />
      ))}
    </div>
  );
}



export default TaskList;