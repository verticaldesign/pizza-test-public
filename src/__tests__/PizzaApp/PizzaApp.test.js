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

  describe("When component is not loaded", () => {
    it("should remove loaded class on main and h1", () => {
      component.setState({ loaded: false });
      expect(component.find("main").hasClass("loading")).to.be.true();
      expect(component.find("h1").hasClass("hidden")).to.be.true();
    });
  });

  describe("When handleSort is called ", () => {
    it("should change the sortOrder", () => {
      let sortOrderPrevious = component.state().sortOrder;
      component.instance().handleSort();
      expect(component.state().sortOrder).to.not.equal(sortOrderPrevious);
    });
    it("should set descending sortOrder", () => {
      component.setState({ sortOrder: 1 });
      component.instance().handleSort();
      expect(component.state().sortOrder).to.equal(-1);
    });
    it("should set inverse sortOrder", () => {
      component.setState({ sortOrder: 0 });
      component.instance().handleSort();
      expect(component.state().sortOrder).to.equal(1);
    });
  });

  describe("When the fetchPizzas() is called", () => {
    let fetchPizzasStub;
    beforeEach(() => {
      fetchPizzasStub = sinon.stub(pizzaServices, "fetchPizzas");
      fetchPizzasStub.resolves({ pizzas: ["test"] });
    });
    afterEach(() => {
      fetchPizzasStub.restore();
    });

    it("should update state", async () => {
      await component.instance().componentDidMount();
      expect(component.state().pizzas).to.equal(["test"]);
      expect(fetchPizzasStub.calledOnce).to.be.true();
    });

    it("should set loaded to true", async () => {
      await component.instance().componentDidMount();
      expect(component.state().loaded).to.equal(true);
    });
  });
  describe("When component is loaded", () => {
    it("should remove loaded class on main and h1", () => {
      component.setState({ loaded: true });
      expect(component.find("main").hasClass("loading")).to.be.false();
      expect(component.find("h1").hasClass("hidden")).to.be.false();
    });
  });
});
