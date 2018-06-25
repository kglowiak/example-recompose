import React from "react";
import ReactDOM from "react-dom";
import { List } from './list';

import "./styles.css";

const App = () => (
  <div className="App">
    <h1>Hello</h1>
    <List />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
