import React from "react";
import "./PizzaApp.css";
import {fetchPizzas} from "../../API/pizzaAPI"

class PizzaApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas:[]
    };

  }
  componentDidMount() {
    fetchPizzas().then( pizzas =>
      this.setState({ pizzas  })
    )
  }

  renderPizzaList() {
    let pizzaList = this.state.pizzas
  }

  render() {
    return <div>{this.renderPizzaList()}</div>;
  }
}

export default PizzaApp;
