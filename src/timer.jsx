import { useRef, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(0);

  const value2 = useRef();

  function clock() {
    let value = setInterval(() => {
      setTimer((c) => c + 1);
    }, 1000);
    value2.current = value;
  }

  function stop() {
    clearInterval(value2.current);
  }

  return (
    <div>
      <h2>This is Timer</h2>
      <div>{timer}</div>
      <button onClick={clock}>Start</button>
      <button style={{ marginLeft: 10 }} onClick={stop}>
        Stop
      </button>
    </div>
  );
}
