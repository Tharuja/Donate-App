import React, { Component } from 'react';



class Login extends Component {

  

  render() {
    return (
        <div>
             <br/><br/><br/><br/><br/>
            <div class="row" >
     <div class="col-md-4"></div>
     <div class="col-md-4">
         
<form class="text-center border border-light p-5">

    <p class="h4 mb-4">Login Here</p>

  
        <div class="md-form mb-5">
          <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label> <br/>
          <input type="email" id="defaultForm-email" class="form-control validate"/>

        </div>

        <div class="md-form mb-4">
          <label data-error="wrong" data-success="right" for="defaultForm-pass"> Your password</label> <br/>
          <input type="password" id="defaultForm-pass" class="form-control validate"/>
        </div>

    
    
    <button class="btn btn-unique my-4 btn-block" type="submit">Login</button>
 <br/>
    <p>Not a member?
        <a href="/signup">Register</a>
    </p>


</form>
<hr/>
</div>
</div>




      </div>
    );
  }
}

export default Login;
