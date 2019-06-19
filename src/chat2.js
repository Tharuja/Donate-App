import React, { Component } from 'react';



class Chat2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
          chat:["You started the chat"],
          msg:""
        };
    
      }


      send(e)
      {
       e.preventDefault();

       this.setState({
        chat: this.state.chat.concat(this.state.msg)
      });
      
      }

      render(){

      return(
            
            <div>

<br/><br/><br/><br/>  <h1 class="h4 mb-4">Live Chat</h1>
        


<form class="text-center border border-light p-5">
    <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="Type your messgae" value={this.state.msg }onChange={event => this.setState({msg: event.target.value})}/>
    <button class="btn btn-unique "  onClick={this.send.bind(this)} type="submit">Send</button>
     </form>

     <ul class="list-group">
     {this.state.chat.map(function(todo) {
                      return <li class="list-group-item" >{todo}</li>
                 })}

     </ul>
     
     
     
            </div> 



      )

      }

}



export default Chat2;
