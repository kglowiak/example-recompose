import React, { Fragment } from "react";
import { compose, branch, renderComponent } from "recompose";

const ComponentWithAuth = () => <p>Authenticated</p>;
const ComponentWithoutAuth = () => <p>Not Authenticated</p>;

const Branch = branch(
  ({ auth }) => auth,
  renderComponent(ComponentWithAuth),
  renderComponent(ComponentWithoutAuth)
)();

export { Branch };
