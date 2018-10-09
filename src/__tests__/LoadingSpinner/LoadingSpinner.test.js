import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

describe("Given <LoadingSpinner>", () => {
  let component;
  beforeEach(() => {
    component = shallow(<LoadingSpinner />);
  });
  it("should exist", () => {
    expect(component.exists()).to.be.true();
  });
  it("should have class name loading-spinner", () => {
    expect(component.hasClass("loading-spinner")).to.be.true();
  });
});
