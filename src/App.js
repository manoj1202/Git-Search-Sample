import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state={
    users:[]
  }

  getUserName= () => {
    if(document.getElementById('input').value !=='') 
    {
    const name= this.refs.name.value;
    fetch(`http://api.github.com/users/${name}`)
    .then(response =>response.json()) 
    .then(data => {
      this.setState(() => {
       console.log(data)
      })
    })
      document.getElementById('input').value='';
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Git HUb Search</h1>
        </header>
        <p className="App-intro">Search Git UserName </p>
        <input type= "text" placeholder="Enter UserName " ref='name' id="input"/>
        <button onClick={this.getUserName}>Search user</button>
        <br/>
        <p>{this.state.users}</p>
      </div>
    );
  }
}

export default App;
