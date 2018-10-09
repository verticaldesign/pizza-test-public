import React from "react";
import "./PizzaApp.css";
import { fetchPizzas } from "../../API/pizzaAPI";
import PizzaList from "../PizzaList/PizzaList";
import PizzaBackground from "../PizzaBackground/PizzaBackground.js";
import SortAndFilter from "../SortAndFilter/SortAndFilter";

class PizzaApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [],
      loaded: false,
      filterText: "",
      sortOrder: 0
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }
  componentDidMount() {
    fetchPizzas().then(result =>
      this.setState({ pizzas: result.pizzas, loaded: true })
    );
  }
  handleFilterChange(res) {
    this.setState({ filterText: res });
  }
  handleSort() {
    let newOrder = this.state.sortOrder < 1 ? 1 : -1;
    this.setState({ sortOrder: newOrder });
  }

  render() {
    let containerClassNames = "content-container";
    if (!this.state.loaded) {
      containerClassNames += " loading";
    }
    return (
      <div className="pizza-app-container">
        <h1>Pizza Pizza</h1>
        <main className={containerClassNames}>
          <SortAndFilter
            loaded={this.state.loaded}
            filterText={this.state.filterText}
            handleFilterChange={this.handleFilterChange}
            handleSort={this.handleSort}
          />
          <PizzaList
            pizzas={this.state.pizzas}
            loaded={this.state.loaded}
            filterText={this.state.filterText}
            sortOrder={this.state.sortOrder}
          />
        </main>
        <PizzaBackground loaded={this.state.loaded} />
      </div>
    );
  }
}

export default PizzaApp;
