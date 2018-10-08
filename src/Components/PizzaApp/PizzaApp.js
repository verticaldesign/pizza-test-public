import React from "react";
import "./PizzaApp.css";
import { fetchPizzas } from "../../API/pizzaAPI";
import PizzaList from "../PizzaList/PizzaList";

class PizzaApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [],
      loaded: false
    };
  }
  componentDidMount() {
    fetchPizzas().then((result) =>
      this.setState({ pizzas: result.pizzas, loaded:true })
    );
  }

  render() {
    return (
      <main>
        <PizzaList pizzas={this.state.pizzas} loaded={this.state.loaded} />
      </main>
    );
  }
}

export default PizzaApp;
