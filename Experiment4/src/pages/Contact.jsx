import { useNavigate } from "react-router-dom"
function Contact() {
  const navigate = useNavigate();

  return (
    <>
        <h1>Contact</h1>

        <form>
          <label>Name: </label>
          <input type="text"></input>
          <br></br>

          <label>Contact: </label>
          <input type="text"></input>
          <br></br>

        </form>
        <button onClick={() => {navigate("/")}} >Submit</button>
    </>
  )
}

export default Contact
