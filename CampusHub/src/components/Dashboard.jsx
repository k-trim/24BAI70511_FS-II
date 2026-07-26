function Dashboard(props) {
  return (
    <div>
      <h2>Welcome {props.name}</h2>
      <p>Total Tasks : {props.total}</p>
      <p>Completed Tasks : {props.completed}</p>
      <p>Pending Tasks : {props.pending}</p>
    </div>
  );
}

export default Dashboard;