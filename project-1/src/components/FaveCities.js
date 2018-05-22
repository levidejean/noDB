import React, {Component} from 'react';
import axios from "axios";

export default class FaveCities extends Component{

constructor(){
    super()
    this.state = {
        city: ""
    }
       this.handleSaveCity = this.handleSaveCity.bind(this); 
      
}
handleSaveCity(){

axios.post('/api/fave',{city: this.state.city}).then(
    results => {console.log(results);}
)
}

render(){
    console.log(this.state.city)
    return(
        <div>
        <input onChange={e => {this.setState({city: e.target.value})}}/>
        <button onClick={() => this.handleSaveCity()}>Save City</button>
        <h1>City 1</h1>
        <h1>City 2</h1>
        <h1>City 3</h1>
        </div>
    )
}
  
}