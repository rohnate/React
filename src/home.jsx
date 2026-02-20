import { Link } from "react-router-dom";
import Part1 from "./part1";

export default function Home() {
  return (
    <>
      <h2>Welcome to Home page.</h2>
      <h4>Here we are Learning React from scratch.</h4>
      <Link to="/learning/part1">Part 1 - page</Link>
      <br />
      <Link to="/about">About</Link>
      {/* "to" in Link tag expects a string path, not a component. */}
    </>
  );
}
