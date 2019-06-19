import React, { Component } from 'react';



class Payment extends Component {

  

  render() {
    return (
        <div>
             <br/><br/><br/><br/>
            <div class="row" >
     <div class="col-md-12">
         
<form class="text-left border border-light p-5">

    <p class="h4 mb-4">Shipping Information</p>

    <div class="form-row mb-4">
        <div class="col">
        <input class="form-control" type="text" placeholder="Name"></input>
        </div>
    </div>

    <div class="form-row mb-4">
        <div class="col">
        <input class="form-control" type="text" placeholder="Address"></input>
        </div>
    </div>
    <hr/>
    <p class="h4 mb-4">Payment Information</p>

<div class="form-row mb-4">
    <div class="col">
    <input class="form-control" type="text" placeholder="Card Information"></input>
    </div>
</div>

<div class="form-row mb-4">
    <div class="col">
    <input class="form-control" type="text" placeholder="Expiry"></input>
    </div>
</div>

<div class="form-row mb-4">
    <div class="col">
    <input class="form-control" type="text" placeholder="CVC"></input>
    </div>
</div>
 <h3>Amount to pay :- </h3>
 <div class="row">
     <div class="col-md-8"></div>
     <div class="col-md-4">
        <button class="btn btn-danger my-4 " type="reser">Cancel</button>
        <button class="btn btn-indigo my-4 " type="submit">Place Order</button>
    </div>
</div>

</form>

</div>
</div>




      </div>
    );
  }
}

export default Payment;
