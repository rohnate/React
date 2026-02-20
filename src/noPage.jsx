import { Link } from "react-router-dom";

export default function Nopage() {
  return (
    <>
      <h1>Oops! Page not available</h1>
      <Link to="/">Back to Home</Link>
    </>
  );
}
