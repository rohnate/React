import { useEffect, useState } from "react";

export default function Notification() {
  const [count, setCount] = useState(0);

  function subscribe() {
    setCount((c) => c + 1);
  }

  //   useEffect(() => {
  //     setInterval(() => {
  //       setCount((c) => (c + 1));
  //     }, 5000);
  //   }, []);    // this is not tracking any dependancy(any variable or anyting which can be tracked) because this dependancy array is empty.

  useEffect(() => {
    console.log("The count has just changed");
  }, [count]); // this'll run on mount first and then will run whenever the count gets changed.

  return (
    <div style={{ display: "flex" }}>
      <img
        style={{ height: 40, width: 40 }}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F015%2F934%2F666%2Foriginal%2Fbell-icon-simple-element-symbol-for-template-design-can-be-used-for-website-and-mobile-application-vector.jpg&f=1&nofb=1&ipt=1ac6e02b766e9403fa3c344cce59ada4c74da5cf912c701c67d9dc6eaf58ed05"
        alt="bellIcon"
      />
      <div style={{ backgroundColor: "blue", height: 25, width: 25 }}>
        {count}
      </div>
      <button onClick={subscribe}>subscribe</button>
    </div>
  );
}
