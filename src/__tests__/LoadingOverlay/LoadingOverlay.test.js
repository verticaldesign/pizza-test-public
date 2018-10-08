import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import LoadingOverlay from "../../Components/LoadingOverlay/LoadingOverlay";

describe("Given <LoadingOverlay>", () => {
  function renderComponent(props = {}) {
    return shallow(<LoadingOverlay {...props} />);
  }

  it("should have id of loading-overlay", () => {
    let component = renderComponent();
    expect(component.is("#loading-overlay")).to.be.true();
  });

  describe("When loaded is true", () => {
    it("should hide itself", () => {
      let component = renderComponent({ loaded: true });
      expect(component.hasClass("loaded")).to.be.true();
    });
  });
});
