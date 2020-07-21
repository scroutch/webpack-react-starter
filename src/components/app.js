import React from "react";
import "./app.scss";

const App = () => {
  return (
    <div className="full-screen">
      <div>
        <h1>
          Hello world {" "}
        </h1>
        <br />
        <a
          className="button-line"
          href="https://fr.reactjs.org/docs/hello-world.html"
          target="_blank"
        >
          DOC React
        </a>
      </div>
    </div>
  );
};

export default App;