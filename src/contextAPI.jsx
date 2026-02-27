import { createContext, useContext, useState } from "react";

const NameContext = createContext();

export default function ContextAPI() {
  const [greet, setGreet] = useState(true);

  return (
    <div>
      <h1>Context API</h1>
      <NameContext.Provider
        value={{ greet: greet, setGreet: setGreet, name: "Rahul" }}
      >
        <First />
      </NameContext.Provider>
    </div>
  );
}

function First() {
  return (
    <div>
      <h2>Im the first component</h2>
      <Second />
    </div>
  );
}

function Second() {
  return (
    <div>
      <h3>Im the Second component</h3>
      <Third />
    </div>
  );
}
function Third() {
  const { greet, setGreet, name } = useContext(NameContext);

  function click() {
    setGreet((c) => !c);
  }
  return (
    <div>
      {greet ? <h3>{name}, this is directly comming from first parent component.</h3> : null}
      <button onClick={click}>Click here</button>
    </div>
  );
}
