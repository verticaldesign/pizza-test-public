import { expect } from "code";
import sinon from "sinon";
import { fetchPizzas } from "../../API/pizzaAPI.js";

describe("Given the GitHub Api", () => {
  let fetchStub;

  beforeEach(() => {
    fetchStub = sinon.stub(window, "fetch");
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("When fetchPizzas is called", () => {
    describe("Then the call is sucsesfull", () => {
      const mockVal = { pizzas: [] };
      const json = sinon.stub().returns(mockVal);
      beforeEach(() => {
        fetchStub.resolves({ json });
      });
      it("should return the mock values", () => {
        fetchPizzas().then(pizzas => {
          expect(pizzas).to.equal(mockVal);
        });
      });
    });

    describe("Then service rejects", () => {
      beforeEach(() => {
        fetchStub.rejects({ message: "Error getting your pizza" });
      });
      it("should throw and error", () => {
        fetchPizzas()
          .then(() => {
            expect(true).to.be.false();
          })
          .catch(e => {
            expect(e.message).to.equal("We dropped the pizza, sorry bro.");
          });
      });
    });
  });
});
