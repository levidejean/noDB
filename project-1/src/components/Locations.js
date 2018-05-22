import React, { Component } from "react";
import axios from "axios";
import "./Locations.css";

export default class Locations extends Component {
  constructor() {
    super();

    this.state = {
      state: "",
      city: "",
      weatherArr: [],
      userInput: ""
    };
    // this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(city) {
    console.log(city);
    axios.get(`api/getweather/${this.state.city}`).then(results => {
      this.setState({ weatherArr: results.data });
      console.log(results.data);
    });
  }

  handleCityChange(value) {
    this.setState({ city: value });
  }
  getCityAndState() {}
  render() {
    console.log(this.state);
    return (
      <div className="boxes">
        <input
          className="cityInput"
          onChange={e => this.handleCityChange(e.target.value)}
        />
        <button onClick={() => this.handleSubmit(this.state.city)}>
          Submit
        </button>
        <div className="container-1">
          {this.state.weatherArr ? <h1>{this.state.weatherArr.name}</h1> : null}
          {this.state.weatherArr.main ? (
            <h2>{this.state.weatherArr.main.temp}</h2>
          ) : null}
          {this.state.weatherArr.main ? (
            <h3> min {this.state.weatherArr.main.temp_min}</h3>
          ) : null}
          {this.state.weatherArr.main ? (
            <h3> max {this.state.weatherArr.main.temp_max}</h3>
          ) : null}
          {this.state.weatherArr.weather ? (
            <img
              src={`http://openweathermap.org/img/w/${
                this.state.weatherArr.weather[0].icon
              }.png`}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
