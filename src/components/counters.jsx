import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 3 },
      { id: 4, value: 6 },
    ],
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
  render() {
    return (
      <div>
        {this.state.counters.map((element) => (
          <Counter
            onDelete={this.handleDelete}
            counter={element}
            key={element.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
