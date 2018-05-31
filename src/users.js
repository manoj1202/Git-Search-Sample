import React,{Component} from 'react';

class Users extends Component{
    render(){
        return(
            <div>
                <p>User Details</p>
                <p>{"Name  :"+ this.state.users.name}</p>
                <p>{"avathar-url  :"+this.state.users.avatar_url}</p>    
            </div>
        );
    }
}

export default Users


