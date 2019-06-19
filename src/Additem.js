import React, { Component } from 'react';
import img from './img/img.jpg'


class Additem extends Component {

  constructor(props) {
    super(props);
    this.state = {
       donateitem:"",
       name:"",
       age:"",
       place:""
    };
}

donate(e)
{
  e.preventDefault(e)
  console.log(this.state)

  const user ={
    name:this.state.name,
    age:this.state.age,
    place:this.state.place,
    donateitem:this.state.donateitem
    
  }
 
  fetch('http://localhost:3001/reg/donate',{
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify(user)
  })
  .then(function(response){ 
    if (response.status === 200) {
     window.alert('Registered successfully..!')
 }  
else if (response.status === 500) 
   {
     window.alert('Register is  failed...Please fill all correctly !')
 }  
 
    })
   .catch(function() {
    console.log('error handling');
    window.alert("something is going wrong..!!")
});
 
}

  

  render() {
    return (
        <div >
             <br/>
<div class="row">

<div class="col-md-4">

<div class="card mx-l-5">

    <div class="card-body"> 
    <div class="card-title badge badge-secondary text-wrap" style={{width:"18rem"}}><h3 >I want to donate...</h3></div>

        <form>  

        <label for="defaultFormCardEmailEx" class="grey-text font-weight-light">What to donate?</label>
            <input type="text" id="defaultFormCardEmailEx" class="form-control"  value={this.state.donateitem} onChange={event => this.setState({donateitem: event.target.value})}/>
            <br/>
            <label for="defaultFormCardNameEx" class="grey-text font-weight-light">Doantor's name</label>
            <input type="text" id="defaultFormCardNameEx" class="form-control" value={this.state.name} onChange={event => this.setState({name: event.target.value})}/>

            <br/>

            <label for="defaultFormCardEmailEx" class="grey-text font-weight-light">Age</label>
            <input type="text" id="defaultFormCardEmailEx" class="form-control" value={this.state.age} onChange={event => this.setState({age: event.target.value})}/>

             <br/>

            <label for="defaultFormCardEmailEx" class="grey-text font-weight-light">Place</label>
            <input type="text" id="defaultFormCardEmailEx" class="form-control" value={this.state.place} onChange={event => this.setState({place: event.target.value})}/>
            
            <br/>

            <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
  </div>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
    <label class="custom-file-label" for="inputGroupFile01">Choose Image</label>
  </div>
</div>
            <div class="text-center py-4 mt-3">
                <button class="btn btn-outline-purple" type="submit" onClick={this.donate.bind(this)}>Confirm my donation<i class="fa fa-paper-plane-o ml-2"></i></button>
            </div>
        </form>
    </div>
</div>

</div>
<div class="col-md-8"><img src={img} style={{height:"650px", width:"900px"}}/> </div>
</div>
      </div>
    );
  }
}

export default Additem;
