import React, {Component} from 'react';
import Locations from './Locations'

export default class Body extends Component{
    


render(){
    return(
        
        <div className="App">
        <h1 className="App-header">Holly Smokes There's Weather Out There!!</h1>
      <p className="App-comment">Let's See What It's Doing!</p>
      <Locations/>
    
    </div>
    )}
};