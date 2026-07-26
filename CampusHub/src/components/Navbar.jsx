import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h2>CampusHub</h2>
      <Link to="/dashboard">Dashboard</Link> |
      <Link to="/tasks"> Tasks </Link>|
      <Link to="/resources"> Resources </Link>|
      <Link to="/profile"> Profile</Link>
      <hr />
    </div>
  );
}

export default Navbar;