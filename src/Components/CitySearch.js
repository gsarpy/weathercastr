import React, { Component } from 'react';

export default class CitySearch extends Component {
  constructor(props) {
    super();
  }

  handleAddCity = (e) => {
    e.preventDefault();

    this.props.onAddCity(this.refs.newCity.value);

    this.refs.newCity.value = "";
  }

  render() {
    return (
      <form id="add-todo" onSubmit={this.handleAddCity}>
        <div className="row mt25">
          <div className="col s12 m12 l10">
            <input type="text" ref="newCity" className="add-item-input" placeholder="Find and add a new city" required />
          </div>
          <div className="col s12 m12 l2">
            <input type="submit" className="btn btn-wide" value="Add City" />
          </div>
        </div>
      </form>
    );
  }
}
