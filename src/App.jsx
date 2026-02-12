import { useEffect, useState } from "react";
import "./App.css";

// defining the component
function Counter() {
  const [count, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);
  }, []); // dependancy array

  function increaseCount() {
    setCounter(count + 1);
  }
  function decreaseCount() {
    setCounter(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>increase Counter</button>
      <button onClick={decreaseCount}>decrease Counter</button>
    </div>
  );
}

// main function where the component render and this never unmounts.
function App() {
  let conditionalRender = true;
  return (
    <>
      <div>
        <h1>Hi, there</h1>
        {/* conditional rendering */}
        {conditionalRender ? <Counter></Counter> : null}{" "}
        {/* this is the turnary operator */}
      </div>
    </>
  );
}

export default App;
