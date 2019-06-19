import React, { Component } from 'react';



class Signup extends Component {

  

  render() {
    return (
        <div>
             <br/><br/><br/><br/><br/>
            <div class="row" >
     <div class="col-md-4"></div>
     <div class="col-md-4">
         
<form class="text-center border border-light p-5">

    <p class="h4 mb-4">Register Here</p>

    <div class="form-row mb-4">
        <div class="col">

            <input type="email" id="defaultRegisterFormFirstName" class="form-control" placeholder="Email"/>
        </div>
    </div>

    <div class="form-row mb-4">

        <div class="col">
        
            <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Name"/>
        </div>
    </div>

    
    {/* <input type="text" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="Contact No"/> */}
    

    
    <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
        At least 8 characters and 1 digit
    </small>

    
    
    <button class="btn btn-unique my-4 btn-block" type="submit">Sign up</button>


</form>
<hr/>
</div>
</div>






      </div>
    );
  }
}

export default Signup;
