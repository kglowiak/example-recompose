import React from "react";
import randomString from "randomstring";
import { compose, withHandlers, withProps, withState } from "recompose";
import { ListLayout } from "./list-layout";

const withListHandlers = withHandlers({
  addRandomElement: ({ setItems, listItems }) => () => {
    setItems([...listItems, randomString.generate()]);
  },
  toggleAuth: ({ setAuth, auth }) => () => setAuth(!auth)
});

const withListProps = withProps(({ listItems }) => ({
  exampleProp: "number of elements " + listItems.length
}));

const List = compose(
  withState("listItems", "setItems", []),
  withState("auth", "setAuth", false),
  withListHandlers,
  withListProps
)(ListLayout);

export { List };
