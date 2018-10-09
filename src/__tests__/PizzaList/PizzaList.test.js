import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import PizzaList from "../../components/PizzaList/PizzaList";

describe("Given ,<PizzaList>", () => {
  let component;
  beforeEach(() => {
    component = shallow(<PizzaList />);
  });
  it("should exist", () => {
    expect(component.exists()).to.be.true();
  });
  it("should have class of pizza-list-container", () => {
    expect(component.hasClass("pizza-list-container")).to.be.true();
  });
  describe("When pizzas are not loaded", () => {
    it("should display a loading message", () => {
      expect(component.hasClass("loading")).to.be.true();
    });
  });

  function renderComponent(props = {}) {
    return shallow(<PizzaList loaded={true} {...props} />);
  }
  describe("When pizzas are given", () => {
    it("should display the list of pizzas with class of pizza-item", () => {
      let renderedComponent = renderComponent({ pizzas: ["pepperoni", "sss"] });
      expect(renderedComponent.find(".pizza-item").length).to.equal(2);
    });
    describe("When filterText is given", () => {
      it("should filter the list of pizzas", () => {
        let renderedComponent = renderComponent({
          pizzas: ["peperoni", "sss"],
          filterText: "sss"
        });
        expect(renderedComponent.find(".pizza-item").length).to.equal(1);
      });
    });
  });
  describe("When pizzas are empty", () => {
    it("should display and empty list message", () => {
      let renderedComponent = renderComponent({ pizzas: [] });
      expect(renderedComponent.find(".empty-list").length).to.equal(1);
    });
  });
});
