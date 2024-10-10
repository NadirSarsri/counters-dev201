import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onDelete, onIncrement, onDecrement, onReset, counters } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-sm btn-primary">
          Reset
        </button>
        {counters.map((element) => (
          <Counter
            key={element.id}
            onDelete={onDelete}
            counter={element}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
