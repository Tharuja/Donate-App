import React, { Component } from 'react';

import img from './img/img.jpg'


class Order extends Component {


    constructor(props) {
        super(props);
        this.state = {
            location:"",
            type:"",
           donations:[]
        };
    }


    componentDidMount(){
    
    let initialdels=[]
    
    fetch('http://localhost:3001/reg/showdon/',{
      method:"GET",
      headers: {
        "Content-Type": "application/json"
      },
     // body:JSON.stringify(user)
    })
    .then(response =>{ 
     return  response.json();
       // console.log(response.json());
    //  response.json().then(function(user) { console.log(user.type) });
      //window.alert('City added.!')
  
     })
     .then(data =>{
      initialdels = data.map((del) => {
        return del
      
     })
     console.log(initialdels)
     this.setState({
       donations:initialdels
     })
    })
     .catch(function() {
      console.log('error handling');
      window.alert("something is going wrong..!!")
  });
     
  
    }


    locationsumbit(e){
        e.preventDefault(e)
 
        const item={
            
            location:this.state.location,
            type:this.state.type
        }

        fetch('http://localhost:3001/reg/locationsearch',{
            method:"POST",
            headers: {
              "Content-Type": "application/json"
             
            },
            body:JSON.stringify(item)
           
          })
          .then(function(response){ 
    
               return response.json(); 
            
           })
           .then((res) => {
  
            this.setState({

                donations: res
            });
            //console.log(this.state.item);
        })

       

    }

  render() {

    let donationlist=this.state.donations.map((don,index)=> { 
      return(
        
          
        <div class="card col-md-3">
        <img class="card-img-top" src={img} alt="Card image cap"/>
          <div class="card-body"> 
            <h5 class="card-title">{don.donateitem}</h5>
            <p class="card-text">{don.name} (age: {don.age})</p>
            <p class="card-text">from {don.place}</p>
            <a  class="btn btn-secondary">Request</a>
            </div>
            </div>


      )
    })

    return (

        <div>
           
           <div class="row">
             <div class="col-md-4"></div>
          <h1>Available Donations</h1> 
          </div>           

             <div class="row">
             <div class="col-md-3"></div>
            
             <form class="form-inline mr-auto">
             <input class="form-control mr-sm-2" type="text" placeholder="Type" aria-label="Search" value={this.state.type} onChange={event => this.setState({type: event.target.value})}/>
             <input class="form-control mr-sm-2" type="text" placeholder="Location" aria-label="Search" value={this.state.location} onChange={event => this.setState({location: event.target.value})}/>
              <button class="btn blue-gradient btn-rounded btn-sm my-0" type="submit" onClick={this.locationsumbit.bind(this)}>Search</button>
             </form>
           </div>
             
           <br/>

        
      <div class="row">
      <div class="col-md-1"></div>
       
      
           {donationlist}
           
</div>

       
      

<br/>
      </div>
    );
  }
}

export default Order;
