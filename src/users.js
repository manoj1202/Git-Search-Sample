import React,{Component} from 'react';

class Users extends Component{
    render(){
        const {users} = this.props;
        
       
        return(
            <div>
                <p>User Details</p>
                <p>{"Name  :"+ users.name}</p>
                <p>{"avathar-url  :"+ users.avatar_url}</p>    
            </div>
        );
    }
}

export default Users