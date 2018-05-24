import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state={
    users:[]
  }

  getUserName= () => {
    const name= this.refs.name.value
    fetch('http://api.github.com/users/${name}')
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
        <input type= "text" placeholder="Enter UserName " ref='name'/>
        <button onClick={this.getUserName}>Search user</button>
        <br/>
        <p></p>
      </div>
    );
  }
}

export default App;
