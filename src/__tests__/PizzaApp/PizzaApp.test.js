import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import PizzaApp from "../../Components/PizzaApp/PizzaApp";

describe("Given <PizzaApp>", () => {
  let component;
  beforeEach(() => {
    component = shallow(<PizzaApp />);
  });
  it("should exist", () => {
    expect(component.exists()).to.be.true();
  });
});
