import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import PizzaBackground from "../../Components/PizzaBackground/PizzaBackground";

describe("Given <PizzaBackground>", () => {
  function renderComponent(props = {}) {
    return shallow(<PizzaBackground {...props} />);
  }

  it("should have id of pizza-background", () => {
    let component = renderComponent();
    expect(component.is("#pizza-background")).to.be.true();
  });

  describe("When loaded is true", () => {
    it("should hide itself", () => {
      let component = renderComponent({ loaded: true });
      expect(component.hasClass("loaded")).to.be.true();
    });
  });
});
