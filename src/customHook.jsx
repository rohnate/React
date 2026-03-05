import { useState } from "react";
import { useFetch, usePostTitle } from "./hooks/useFetch";

// Defining the custome Hook
function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((c) => c + 1);
  }

  return {
    // returning out the variables from the hook in an object.
    count: count,
    increaseCount: increaseCount,
  };
}

export default function CustomHook() {
  const { count, increaseCount } = useCounter(); // using the custom Hook after de-structuring the object
  const postTitle = usePostTitle(); // calling custom postTitlel hook from hooks folder
  const data = useFetch("https://jsonplaceholder.typicode.com/posts/6")
  return (
    <div>
      <h1>You are in Custom-Hooks</h1>
      <h2>{count}</h2>
      <button onClick={increaseCount}>Increase Count</button>
      <br />
      <div
        style={{
          backgroundColor: "purple",
          padding: 20,
          borderRadius: 30,
          marginTop: 20,
        }}
      >
        <h3>This is from usePostTitle Hook</h3>
        <p>{postTitle}</p>
      </div>
      <br />
      <div
        style={{
          backgroundColor: "slateblue",
          padding: 20,
          borderRadius: 30,
          marginTop: 20,
        }}
      >
        <h3>This is from useFetch Hook</h3>
        <p>{data.title}</p>
      </div>
    </div>
  );
}
