import React from "react";
import { shallow } from "enzyme";
import { ListLayout } from "./list-layout";

describe("list-layout", () => {
  const props = {
    exampleProp: "test",
    listItems: [],
    addRandomElement: jest.fn()
  };

  it("should render expected markup with empty list", () => {
    const wrapper = shallow(<ListLayout {...props} />);
    //snapshot here, pro unit tests
    expect(true).toBe(true);
  });

  it("should invoke addRandomElement on button blick", () => {
    const wrapper = shallow(<ListLayout {...props} />);
    const spy = jest.spyOn(wrapper.instance(), "addRandomElement");
    const button = wrapper.find("button");
    button.simulate("click");
    expect("aa").toBeHaveBeenCalled();
  });
});
