import { useRef } from "react";

export default function Useref() {
  // here we will use "useRef" to get reference of the dom elements, basically getting focus on the different inputs using button.

  // creating different ref's to storing the different inputs reference.
  const usernameRef = useRef();
  const passwordRef = useRef();

  function passFocus() {
    // accessing the DOM node and calling the focus method on it
    passwordRef.current.focus();
  }
  function userFocus() {
    // accessing the DOM node and calling the focus method on it
    usernameRef.current.focus();
  }

  return (
    <>
      <h3>Here we are learning useRef.</h3>
      <br />
      <br />
      <div
        style={{
          height: "auto",
          width: 800,
          backgroundColor: "purple",
          borderRadius: 10,
          padding: 10,
        }}
      >
        <h2>SignUp</h2>
        <div style={{ display: "grid", gap: 10, width: 200 }}>
            {/* attaching the related ref's to the input elements */}
          <input type="text" placeholder="Username" ref={usernameRef} />
          <input type="text" placeholder="Password" ref={passwordRef} />
        </div>
        <div style={{ display: "flex", gap: 10, margin: 20 }}>
          <button onClick={userFocus}>Username</button>
          <button onClick={passFocus}>Password</button>
        </div>
      </div>
    </>
  );
}
