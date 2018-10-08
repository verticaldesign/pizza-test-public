import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import SortAndFilter from "../../Components/SortAndFilter/SortAndFilter";

describe("Given <PizzaBackground>", () => {
  let component;
  function renderComponent(props = {}) {
    return shallow(<SortAndFilter {...props} />);
  }

  it("should exist", () => {
    component = renderComponent();
    expect(component.exists()).to.be.true();
  });
  it("should have a text input", () => {
    component = renderComponent();
    expect(component.find("input").length).to.equal(1);
  });
  it("should have a button with text Sort", () => {
    component = renderComponent();
    expect(component.find("button").text()).to.equal("Sort");
  });

  describe("When list is not loaded", () => {
    it("should disable sort and input", () => {
      component = renderComponent({ loaded: false });
      expect(component.find("button").is("[disabled]")).to.be.true();
      expect(component.find("input").is("[disabled]")).to.be.true();
    });
  });
});
