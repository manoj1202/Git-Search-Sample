import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Git HUb Search</h1>
        </header>
        <p className="App-intro">Search Git UserName </p>
        <input type= "text" placeholder="Enter UserName "/>
        <button>Search user</button>
        <br/>
        <p>{this.getUserName}</p>
      </div>
    );
  }
}

export default App;
