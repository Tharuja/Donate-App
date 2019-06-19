import React, { Component } from 'react';
import io from "socket.io-client";



class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
          chat:["You started the chat"],
          msg:"",
          msgs:[],
          username:""
        };
    
        this.socket = io('localhost:3002');
  
        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({msgs: [...this.state.msgs, data]});
            console.log(this.state.msgs);
        };



        this.send = e => 
        {
         e.preventDefault();
  
        //  this.setState({
        //   chat: this.state.chat.concat(this.state.msg)
        // });
  
        this.socket.emit('SEND_MESSAGE', {
          author: this.state.username,
          message: this.state.msg
      });
      this.setState({msg: ''});
        
        }

      }



      render(){

      return(
            
            <div class="row">
<div class="col-md-3"></div>
<div class="col-md-4">
<br/><br/>  <h1 class="h4 mb-4">Live Chat</h1>
        
<input type="text" placeholder="Enter your Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
<br/>

        
     <div class="list-group-flush alert alert-success">
     {this.state.msgs.map(function(todo) {
                      return <div class="list-group-item  list-group-item-warning " ><p style={{fontSize:"20px" , fontStyle:"Bold"}}><i class="fab fa-slack-hash fa-2x mr-4 mr-4 red p-1 white-text rounded " aria-hidden="true"></i> {todo.author} <span>  </span><span>  </span>
                      <span class="badge badge-primary badge-pill">{todo.message}</span></p>
                      </div>
                 })}
    </div> 

     <form class="text-center border border-light p-3">
    <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="Type your messgae" value={this.state.msg }onChange={event => this.setState({msg: event.target.value})}/>
    <button class="btn btn-unique "  onClick={this.send.bind(this)} type="submit">Send</button>
     </form>
    
  
</div>
     
     
     
            </div> 



      )

      }

}



export default Chat;
