import Navbar from "../components/Navbar";

function Profile() {


  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  return (
    <div>
      <Navbar />
      <h2>Student Profile</h2>
      <p>
        <b>Name :</b> {name}
      </p>
      <p>
        <b>Email :</b> {email}
      </p>

    </div>
  );
}
export default Profile;