import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from 'mdbreact';
import bd from './img/bd.jpg'
import kd from './img/kd.jpg'
import md from './img/md.jpg'




class Home extends Component {

  

  render() {
    return (
     <div>
         
         {/* <MDBView src="https://images.unsplash.com/photo-1533025782032-634283c7c7ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"> */}
        
        
<header>


  
  <section class="view">

    <div class="row">

      <div class="col-md-6">

        <div class="d-flex flex-column justify-content-center align-items-center h-100">
          <h1 class="heading display-3 text-secondary" >iDonate</h1>
          <h4 class="subheading font-weight-bold">Sri Lanka's most popular site for finding donations easily </h4>
          <h4 class="subheading font-weight-bold">-Let's change the ending of someone's story - </h4>

          <div class="mr-auto">
            <button type="button"  class="btn btn-unique"> <a href="/login">Get started </a> </button>
          </div>
        </div>

      </div>

      <div class="col-md-6">

        <div class="view">
          {/* <img src="https://images.pexels.com/photos/325045/pexels-photo-325045.jpeg" class="img-fluid" alt="smaple image"/> */}

          <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={bd}
              alt="First slide"
              style={{height:"500px"}}
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Light mask</h3>
            <p>First text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={kd}
              alt="Second slide"
              style={{height:"500px"}}
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Strong mask</h3>
            <p>Second text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={md}
              alt="Third slide"
              style={{height:"500px"}}
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Slight Mast</h3>
            <p>Third text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
          <div class="mask flex-center hm-gradient">
          </div>
        </div>

      </div>

    </div>

  </section>
  

</header>
      

       

      </div>
    );
  }
}

export default Home;
