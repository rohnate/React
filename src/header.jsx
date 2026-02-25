import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={{ display: "flex", gap:20 }}>
      <Link to="/home">Home</Link>
      <Link to="/learning/part1">Part-1</Link>
      <Link to="/about">About</Link>
      <Link to="/useRef">useRef</Link>
      <Link to="/timer">Timer</Link>
    </div>
  );
}
