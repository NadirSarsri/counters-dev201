import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Navbar{" "}
            <span className="badge text-bg-primary">
              {this.props.totalItems}
            </span>
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
