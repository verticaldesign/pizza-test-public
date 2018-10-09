import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import sinon from "sinon";
import * as pizzaServices from "../../API/pizzaAPI";
import PizzaApp from "../../Components/PizzaApp/PizzaApp";

describe("Given <PizzaApp>", () => {
  let component;
  beforeEach(() => {
    component = shallow(<PizzaApp />);
  });
  it("should exist", () => {
    expect(component.exists()).to.be.true();
  });

  it("should have <PizzaBackground>", () => {
    expect(component.find("PizzaBackground").length).to.equal(1);
  });

  it("should have <SearchAndFilter>", () => {
    expect(component.find("SortAndFilter").exists()).to.true();
  });

  it("should have <PizzaList>", () => {
    expect(component.find("PizzaList").length).to.equal(1);
  });

  describe("When handleFilterChange is called ", () => {
    it("should update state", () => {
      component.instance().handleFilterChange("xxx");
      expect(component.state().filterText).to.equal("xxx");
    });
  });

  describe("When handleSort is called ", () => {
    it("should update state", () => {
      let sortOrderPrevious = component.state().sortOrder;
      component.instance().handleSort();
      expect(component.state().sortOrder).to.not.equal(sortOrderPrevious);
    });
  });

  describe("When the fetchPizzas() is called", () => {
    let fetchPizzasStub;
    beforeEach(() => {
      fetchPizzasStub = sinon.stub(pizzaServices, "fetchPizzas");
      fetchPizzasStub.resolves({ pizzas: ["test"] });
    });
    afterEach(() => {
      fetchPizzasStub.reset();
    });
    it("should update state", async () => {
      await component.instance().componentDidMount();
      expect(component.state().pizzas).to.equal(["test"]);
      expect(fetchPizzasStub.calledOnce).to.be.true();
    });
  });
});
