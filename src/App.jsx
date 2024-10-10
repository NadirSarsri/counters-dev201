import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 3 },
      { id: 4, value: 6 },
    ],
  };
  handleIncrement = (counterId) => {
    // console.log("Incrementing");
    const counters = [...this.state.counters];
    const counter = { ...this.state.counters.find((c) => c.id === counterId) };
    const index = counters.findIndex((c) => c.id === counterId);
    counter.value++;
    counters[index] = counter;
    this.setState({ counters });
  };
  handleDecrement = (counterId) => {
    // console.log("Decrementing");
    const counters = [...this.state.counters];
    const counter = { ...this.state.counters.find((c) => c.id === counterId) };
    const index = counters.findIndex((c) => c.id === counterId);
    counter.value--;
    counters[index] = counter;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    /* const index = this.state.counters.findIndex((c) => c.id === counterId);
    console.log(index);
    const copy = [...this.state.counters];
    copy.splice(index, 1);
      this.setState({ counters: copy }); */

    const modified = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: modified });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      return { ...c, value: 0 };
    });

    this.setState({ counters });
  };

  render() {
    const { counters } = this.state;
    return (
      <>
        <Navbar
          totalItems={counters.filter((counter) => counter.value > 0).length}
        />
        <main className="container pt-3">
          <Counters
            counters={counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </main>
      </>
    );
  }
}

export default App;
