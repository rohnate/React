import { useEffect, useState } from "react";

// here we are learning the clearinterval function which run on unmount.
export default function Timer() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timerr = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(timerr);
      setCount(0);
    };
  }, [visible]);

  //* This runs when: Before effect runs again, Or when component unmounts, So when visible changes: Old interval is cleared, Count is reset to 0, New interval starts

  useEffect(() => {
    setInterval(() => {
      setVisible((c) => !c);
    }, 5000);
  }, []);

  return (
    <div>
      <h3>i am from timer component</h3>
      {visible ? <span>count - {count}</span> : null}
    </div>
  );
}
