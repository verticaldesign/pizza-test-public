import React from "react";
import "./PizzaApp.css";
import { fetchPizzas } from "../../API/pizzaAPI";
import PizzaList from "../PizzaList/PizzaList";
import PizzaBackground from "../PizzaBackground/PizzaBackground.js";
import SearchAndFilter from "../SortAndFilter/SortAndFilter";

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
      <div>
        <main className='content-container'>
          <SearchAndFilter loaded={this.state.loaded} />
          <PizzaList pizzas={this.state.pizzas} loaded={this.state.loaded} />
        </main>
        <PizzaBackground loaded={this.state.loaded} />
      </div>
    );
  }
}

export default PizzaApp;
