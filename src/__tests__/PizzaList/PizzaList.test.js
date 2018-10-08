import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import PizzaList from "../../components/PizzaList/PizzaList";

describe("Given PizzaList", () => {
  let component;
  beforeEach(() => {
    component = shallow(<PizzaList />);
  });
  it("should exist", () => {
    expect(component.exists()).to.be.true();
  });
});
