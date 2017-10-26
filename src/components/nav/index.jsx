import React, { Component } from 'react';

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button className="navbar-brand btn btn-link">Open Price List</button>
          </div>
          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input type="text" name="scanner-code" id="scanner-code" className="form-control" />
            </div>
            <button type="button" className="btn btn-default" id="scanner-enable">
              <i className="glyphicon glyphicon-barcode" />
              Enable barcode
            </button>
          </form>
          <form className="navbar-form navbar-right">
            <button
              className="btn btn-default"
              id="scanner-console-show"
              data-toggle="button"
              aria-pressed="false"
            >
              <i className="glyphicon glyphicon-cog" />
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Nav;
