import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
  };

  setSpanClasses = () => {
    const { count } = this.state;
    let classes = "badge text-bg-";
    return count === 0 ? (classes += "warning") : (classes += "primary");
  };

  handleIncrement = () => {
    // this.state.count++; une erreur fatale
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    // this.state.count--; une erreur fatale
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    const { count } = this.state;
    return (
      <div className="row mb-2 align-items-center">
        <div className="col-1">
          <span className={this.setSpanClasses()}>
            {count === 0 ? "Zero" : count}
          </span>
        </div>
        <div className="col">
          <button
            onClick={this.handleDecrement}
            className="btn btn-sm btn-secondary me-2"
          >
            -
          </button>
          <button
            onClick={this.handleIncrement}
            className="btn btn-sm btn-secondary me-2"
          >
            +
          </button>
          <button
            onClick={() => {
              this.props.onDelete(this.props.counter.id);
            }}
            className="btn btn-sm btn-danger me-2"
          >
            delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
