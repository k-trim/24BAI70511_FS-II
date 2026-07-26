import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardComponent from "../components/Dashboard";

function Dashboard() {
  const name = localStorage.getItem("name");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const total = tasks.length;
  let completed = 0;
  for (let i = 0; i < tasks.length; i++) 
  {
    if (tasks[i].completed) 
    {
      completed++;
    }
  }

  const pending = total - completed;
  return (
    <div>
      <Navbar />
      <Sidebar />
      <DashboardComponent
        name={name}
        total={total}
        completed={completed}
        pending={pending}
      />


    </div>
  );
}

export default Dashboard;