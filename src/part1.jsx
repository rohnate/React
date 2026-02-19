import { useEffect, useState } from "react";
import Notification from "./notification";
import Timer from "./counter";
import Greetings from "./children";

// main function where the component render and this never unmounts.
function Part1() {
  const [random, setRandom] = useState(0);
  let conditionalRender = true;
  return (
    <>
      <div>
        <Notification />
        <Timer/>
        <Greetings>KrishnaMantraDhiDevta</Greetings>  {/* here i am passing children inside the greetings tag */}
        <h1>Hi, there</h1>
        {/* conditional rendering */}
        {conditionalRender ? <Counter></Counter> : null}{" "}
        <Counter2 x={random} y={setRandom} />
        {/* this is the turnary operator */}
      </div>
    </>
  );
}

// defining the component - for understanding useState and useEffect
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

// defining another component - for understanding props
function Counter2(props) {
  function increaseCount() {
    props.y(props.x + 1);
  }
  function decreaseCount() {
    props.y(props.x - 1);
  }

  useEffect(() => {
    console.log("the counter2 has mounted on to the DOM"); // this will run only once because of empty dependancy array
  }, []);

  useEffect(() => {
    console.log("counter2 has changed");

    return () => {
      console.log("counter 2 has unmounted - CLEANUP"); // this will run everytime before the counter2 is about to update and re-render on DOM
    };
  }, [props.x]); // this will run everytime random gets changed

  return (
    <div>
      <h1>{props.x} ~ comming from props</h1>
      <button onClick={increaseCount}>increase Counter</button>
      <button onClick={decreaseCount}>decrease Counter</button>
    </div>
  );
}

export default Part1;
