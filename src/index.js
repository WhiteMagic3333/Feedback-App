import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// ReactDOM.render(<h1>My App</h1>, document.getElementById('root'))
// ReactDOM.render(<App/>, document.getElementById('root'))

//till React 17
// ReactDOM.render(
//   <React.StrictMode>
//     <>
//       <App />
//     </>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

//React 18
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
