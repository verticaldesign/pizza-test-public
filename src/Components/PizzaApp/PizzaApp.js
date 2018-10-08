import React from "react";
import "./PizzaApp.css";
import { fetchPizzas } from "../../API/pizzaAPI";
import PizzaList from "../PizzaList/PizzaList";
import PizzaBackground from "../PizzaBackground/PizzaBackground.js";

class PizzaApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [],
      loaded: false
    };
  }
  componentDidMount() {
    fetchPizzas().then(result =>
      setTimeout(() => {
        this.setState({ pizzas: result.pizzas, loaded: true });
      }, 2050)
    );
  }

  render() {
    return (
      <main>
        <PizzaList pizzas={this.state.pizzas} loaded={this.state.loaded} />
        <PizzaBackground loaded={this.state.loaded} />
      </main>
    );
  }
}

export default PizzaApp;
