import React from "react";
import "./PizzaApp.css";
import { fetchPizzas } from "../../API/pizzaAPI";
import PizzaList from "../PizzaList/PizzaList";

class PizzaApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: []
    };
  }
  componentDidMount() {
    fetchPizzas().then(({ pizzas }) =>
      this.setState({ pizzas })
    );
  }

  render() {
    return (
      <main>
        <PizzaList pizzas={this.state.pizzas} />
      </main>
    );
  }
}

export default PizzaApp;
