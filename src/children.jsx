export default function Greetings({ children }) {
  return (
    <div>
      <h2 style={{color:"red", fontStyle:"italic"}}>Greetings! {children}</h2>
    </div>
  );
}
