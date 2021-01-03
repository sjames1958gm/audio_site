import { Link } from "gatsby";
import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 640,
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>Welcome to AudioCORE</h1>
      <ol style={{ listStyle: "none" }}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/location/dallas">Dallas</Link>
        </li>
        <li>
          <Link to="/location/houston">Houston</Link>
        </li>
        <li>
          <Link to="/location/austin">Austin</Link>
        </li>
      </ol>
    </main>
  );
};

export default IndexPage;
