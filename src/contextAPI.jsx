import { createContext, useContext, useState } from "react";

const NameContext = createContext();

// Creating our own custom provider, a cleaner way to write context
function NameProvider({ children }) {
  const [greet, setGreet] = useState(true);
  return (
    <NameContext.Provider
      value={{ greet: greet, setGreet: setGreet, name: "Rahul" }}
    >
      {children}
    </NameContext.Provider>
  );
}

export default function ContextAPI() {
  return (
    <div>
      <h1>Context API</h1>
      <NameProvider>
        <First />
      </NameProvider>
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
      {greet ? (
        <h3>{name}, this is directly comming from top parent component.</h3>
      ) : null}
      <button onClick={click}>Click here</button>
    </div>
  );
}
