import React from "react";
import randomString from "randomstring";
import { compose, withHandlers, withProps, withState } from "recompose";
import { ListLayout } from "./list-layout";

const withListHandlers = withHandlers({
  addRandomElement: ({ setItems, listItems }) => () => {
    setItems([...listItems, randomString.generate()]);
  }
});

const withListProps = withProps(({ listItems }) => ({
  exampleProp: "number of elements " + listItems.length
}));

const List = compose(
  withState("listItems", "setItems", []),
  withListHandlers,
  withListProps
)(ListLayout);

export { List };
