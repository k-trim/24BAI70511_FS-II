import {Link} from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>


      <hr />
    </div>
  );
}

export default Sidebar;