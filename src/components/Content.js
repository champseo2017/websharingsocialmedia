import React, { Component } from 'react';
import LoginForm from './LoginForm';





export default class Content extends Component {

  submit = data => {
    console.log(data);
};
  render() {
   
    
    return (
 <div class="container">



     
      <div class="row">

        <div class="col-md-8">
        <div class="container text-center pt-5">
        <script id="metamorph-1-start" type="text/x-placeholder"></script><script id="metamorph-21-start" type="text/x-placeholder"></script>
        
        <br/>
        <br/>
        <br/>
        <br/>
       
        <LoginForm submit={this.submit}/>
       </div>
        </div>

        <div class="col-md-4 pt-5">
          
        <br/>
        <br/>
        <br/>
        <br/>
          <h3 class="my-3">Project Description</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
          <h3 class="my-3">Project Details</h3>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Dolor Sit Amet</li>
            <li>Consectetur</li>
            <li>Adipiscing Elit</li>
          </ul>
        </div>

      </div>
     
          </div>
          
    );
  }
}

