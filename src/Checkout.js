import React, { Component } from 'react';



class Checkout extends Component {

  

  render() {
    return (
        <div>
             <br/><br/><br/><br/><br/>
             <div class="row">
         <div class=" col-md-4"></div>        

             <div class="card col-md-3">
        <img class="card-img-top" src="https://fullcart.org/images/fc-logo-circle.png" alt="Card image cap"/>
          <div class="card-body"> 
            <h4 class="card-title">Checkout Your Cart</h4>
            <p class="card-text">details.......</p>
            <p class="card-text">details.......</p>
            <p class="card-text">details.......</p>
            <p class="card-text">details.......</p>
            <a href="/order" class="btn btn-success">Edit Cart</a>
            <a   href="/payment" class="btn btn-secondary">Pay</a>
            </div>
            </div>

            </div>

      </div>
    );
  }
}

export default Checkout;
