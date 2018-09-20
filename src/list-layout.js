import React from "react";

const ListLayout = ({ exampleProp, listItems, addRandomElement }) => (
  <React.Fragment>
    <p>exampleProp - {exampleProp}</p>
    <button onClick={addRandomElement}>Add new random element</button>
    <ul>{listItems.map(i => <li key={i}>{i}</li>)}</ul>
    I'm layout
  </React.Fragment>
);

export { ListLayout };
