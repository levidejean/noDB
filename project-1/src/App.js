import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Locations from './components/Locations';
import Body from './components/Body';
import Header from './components/Header';
import FaveCities from './components/FaveCities';
import Icon from './components/Icon';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      
  
    };
 }
    //did mount here
  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=${process.env.REACT_APP_WEATHER_API}`).then(results => {
     
    });
  }
    

    // update here

    //delete here
  
  render(){
    return(
      <div className="App">
      <Icon/>
      <Header/>
      <Body/>
      <FaveCities/>
      <Icon/>
    
      </div>
    )}
} 



export default App;
