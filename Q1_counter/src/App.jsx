import { useState } from 'react'


function App() {
  
  const [counter, setCount] = useState(10);

  const add = () => {
    setCount(counter + 1);
    console.log("Added");
  }

  const remove = () => {
    setCount(counter - 1);
    console.log("Removed");
  }

  const reset = () => {
    setCount(0);
    console.log("Reset");
  }

  return (
    <>
    <h2>Counter: {counter}</h2>
    <button onClick={add}>Add </button> <br></br>    
    <button onClick={remove}>Remove </button> <br></br>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default App;