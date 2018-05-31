import React, { Component } from 'react';
import Users from './users'
import './App.css';

class App extends Component {
  state={
    users:{}
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
        <Users />
        <p>{"Name  :"+ this.state.users.name}</p>
        <p>{"avathar-url  :"+this.state.users.avatar_url}</p>
        
      </div>
    );
  }
}

export default App;

