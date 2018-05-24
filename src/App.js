import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    users:[]
  }

  getUserName= () => {
    fetch('http://api.github.com/users')
    .then(result =>result.json()) 
    .then(data => console.log(data))

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Git HUb Search</h1>
        </header>
        <p className="App-intro">Search Git UserName </p>
        <input type= "text" placeholder="Enter UserName "/>
        <button onClick={this.getUserName}>Search user</button>
        <br/>
        <p></p>
      </div>
    );
  }
}

export default App;
