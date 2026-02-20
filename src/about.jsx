import { Link, useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 15000); // This will redirect the about page to Home page after 15 seconds. An example for using navigate.

  return (
    <>
      <h3>Welcome on About page</h3>
      <h4>This page is developed by - itsRss</h4>
      <Link to="/">Back to Home</Link>
    </>
  );
}
