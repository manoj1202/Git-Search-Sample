import React, { Component } from 'react';
import Users from './users'
import './App.css';

class App extends Component {
  state={
    users:{
      name:"",
      avatar_url:""
    }
  }

  getUser= () => {
    if(document.getElementById('input').value !=='') 
    {
    const name= this.refs.name.value;
    fetch(`http://api.github.com/users/${name}`)
    .then(result =>result.json()) 
    .then(data => {
      this.setState(() => ({
         users:{
          name : data.name,
          avatar_url : data.avatar_url
        }
      }
      ))
      if (this.state.users.name === "null") {
        this.state.users.name = "Unknown";
      }
       })
      }
    
      document.getElementById('input').value='';
    }
// with dom event 
// componentDidMount(){
//   fetch('http://api.github.com/users')
//   .then(result =>result.json())
//   
// }
// getuser = (data) => {
//     this.setState(() =>{
//       user:[data]
//     })
//   })
// }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Git HUb Search</h1>
        </header>
        <p className="App-intro">Search Git User </p>
        <input type= "text" placeholder="Enter UserName " ref='name' id="input"/>
        <button onClick={this.getUser}>Search user</button>
        <br/>
        <Users users={this.state.users}/> 
      </div>
    );
  }
}

export default App;

