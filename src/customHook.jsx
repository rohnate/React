import { useState } from "react";

// Defining the custome Hook
function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((c) => c + 1);
  }

  return {  // returning out the variables from the hook in an object.
    count: count,
    increaseCount: increaseCount,
  };
}

export default function CustomHook() {
  const { count, increaseCount } = useCounter();    // using the custom Hook after de-structuring the object
  return (
    <div>
      <h1>You are in Custom-Hook</h1>
      <h2>{count}</h2>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}
