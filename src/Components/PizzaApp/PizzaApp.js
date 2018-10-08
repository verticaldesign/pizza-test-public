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
      loaded: false,
      filterText: ""
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  componentDidMount() {
    fetchPizzas().then(result =>
      this.setState({ pizzas: result.pizzas, loaded: true })
    );
  }
  handleFilterChange(res) {
    this.setState({ filterText: res });
  }

  render() {
    return (
      <div>
        <main className="content-container">
          <SearchAndFilter
            loaded={this.state.loaded}
            filterText={this.state.filterText}
            handleFilterChange={this.handleFilterChange}
          />
          <PizzaList pizzas={this.state.pizzas} loaded={this.state.loaded} filterText={this.state.filterText} />
        </main>
        <PizzaBackground loaded={this.state.loaded} />
      </div>
    );
  }
}

export default PizzaApp;
