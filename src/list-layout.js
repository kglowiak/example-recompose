import React from "react";
import { Branch } from "./branch";

const ListLayout = ({
  exampleProp,
  listItems,
  addRandomElement,
  auth,
  toggleAuth
}) => (
  <React.Fragment>
    <button onClick={toggleAuth}>Authenticate</button>
    <Branch auth={auth} />
    {console.log(auth)}
    <p>exampleProp - {exampleProp}</p>
    <button onClick={addRandomElement}>Add new random element</button>
    <ul>{listItems.map(i => <li key={i}>{i}</li>)}</ul>
    I'm layout
  </React.Fragment>
);

export { ListLayout };
