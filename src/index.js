import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
const year = currentDate.getFullYear();
const name = "Ygal";
ReactDOM.render(
  <div>
    <h1>This is a Test</h1>
    <p>this Created by {name}</p>
    <p>Copyright &copy; {year} </p>
  </div>,
  document.getElementById("root")
);
