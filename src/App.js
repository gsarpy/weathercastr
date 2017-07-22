import React, { Component } from 'react';
import './App.css';
import CitySearch from './Components/CitySearch';
import WeatherCard from './Components/WeatherCard';
import Nav from './Components/Layout/Nav';

const appName = "WeatherCastr";
const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "bb7b9d1cc6ee261c880dbe06b660e957";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [
        "san francisco",
      ]
    }

    this.onDelete = this.onDelete.bind(this);
    this.onAddCity = this.onAddCity.bind(this);
  }

  onAddCity = (city) => {
    const updatedCity = this.state.cities;
    updatedCity.push(city);

    this.setState({
      cities: updatedCity
    });

    this.getWeatherData(city);
  }

  onDelete = (city) => {
    const updatedCities = this.state.cities.filter(function(value, index) {
      return city !== value;
    });

    this.setState({
      cities: updatedCities
    });
  }

  getWeatherData = (city) => {
    let weatherData = {};
    const cityName = city;
    this.fullpath = `${apiURL}${cityName}&APPID=${apiKey}&units=imperial`.split(' ').join('+');
    fetch(this.fullpath)
      .then(result => result.json())
      .then(data => weatherData)
      .catch(e => console.log("Could not GET weather data"))
    console.log(city);
  }

  componentDidMount() {
    this.cities = this.state.cities;

    this.cities = this.cities.map(function(city, index) {
      let cityData = this.getWeatherData(city);

      return(
        <WeatherCard
          city={city}
          onDelete={this.onDelete}
          key={index}
          temp={cityData}
        />
      );
    }, this);

  }

  render() {

    return (
      <div>
        <Nav
          appName={appName}
        />
        <div className="container">
          <CitySearch
            placeholder="Find Weather"
            onAddCity={this.onAddCity}
          />
          <div className="row">{this.cities}</div>
        </div>
      </div>
    );
  }
}

export default App;
