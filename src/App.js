import React, { Component } from 'react';
import './App.css';
import CitySearch from './Components/CitySearch';
import WeatherCard from './Components/WeatherCard';
import Nav from './Components/Layout/Nav';

const appName = "WeatherCastr";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [
        "huntington beach",
        "95492",
        "new york city",
        "san francisco"
      ]
    }

    this.onDelete = this.onDelete.bind(this);

  }

  onAddCity = (item) => {
    const updatedTodos = this.state.todos;
    updatedTodos.push(item);

    this.setState({
      todos: updatedTodos
    });
  }

  onDelete = (city) => {
    const updatedCities = this.state.cities.filter(function(value, index) {
      return city !== value;
    });

    this.setState({
      cities: updatedCities
    });
  }

  render() {
    let cities = this.state.cities;

    cities = cities.map(function(city, index) {
      return(
        <WeatherCard
          city={city}
          onDelete={this.onDelete}
          key={index}
        />
      );
    }, this);

    return (
      <div>
        <Nav
          appName={appName}
        />
        <div className="container">
          <CitySearch
            placeholder="Find Weather"

          />
          <span>{cities}</span>
        </div>
      </div>
    );
  }
}

export default App;
