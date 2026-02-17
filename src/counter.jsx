import { useEffect, useState } from "react";

// here we are learning the clearinterval function which run on unmount.
export default function Timer() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    const hide = setInterval(() => {
      setVisible(c=>!c);
    }, 5000);

  }, []);

  return (
    <div>
      <h3>i am from timer component</h3>
      {visible ? <span>count - {count}</span> : null}
    </div>
  );
}
