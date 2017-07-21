import React, { Component } from 'react';

export default class WeatherCard extends Component {

  handleDelete = () => {
    this.props.onDelete(this.props.city);
  }

  render() {
    return (
      <div className="col s4 m4">
        <div className="card blue-grey darken-1">
          <div className="weather-headline">
            <h4 className="city-name">{this.props.city}</h4>
          </div>

          <div className="card-content white-text center">
            <span className="card-title">
              <h3><i></i></h3>
            </span>
          </div>

          <div className="card-action center">
            <button
              className="btn"
              onClick={this.handleDelete}>
              unfollow
            </button>
          </div>

        </div>
      </div>
    )
  }
}