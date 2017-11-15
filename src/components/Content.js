import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import MyComponent from './MyComponent';
import Googlelogin from './Googlelogin';
import validator from 'validator';
import Inlineerror from './Inlineerror';
import PropTypes from "prop-types";




export default class Content extends Component {

  state = {

    data:{
      email: '',
      password:''
    },
    loading: false,
    errors:{}


  };
  onChange = e => this.setState({ 
    
    data:{...this.state.data, [e.target.name]: e.target.value } 
  
  });

  onSubmit = () =>{

    const errors = this.validate(this.state.data);
    this.setState({ errors });
  };

  validate = (data) => {
    const errors ={};
    if(!validator.isEmail(data.email)) errors.email ="กรุณากรอก Email";
    if(!data.password) errors.password = "กรุณากรอกรหัสผ่าน";

    return errors;
  }

  render() {
    const{data, errors} = this.state;
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
        <Form className="form-signin"  onSubmit={this.onSubmit}>
        <h2 class="form-signin-heading">Sign in</h2>
        
       
            <p>
            <MyComponent />
            
            <Googlelogin />
         </p>
        

<small class="text-muted">Or sign in with</small>
		    <br/><br/>
        <FormGroup>
        <Input 
        
        class="ember-view ember-text-field form-control login-input" 
        placeholder="Email Address" 
        type="email" 
        id="email" 
        name="email"
        value={data.email}
        onChange={this.onChange}
        />
        {errors.email && <Inlineerror text = {errors.email} />}
        <br/>
        
        
	    <Input 
    
      class="ember-view ember-text-field form-control login-input-pass" 
      placeholder="Password" 
      type="password"
        id="password" 
        name="password"
        value={data.password}
        onChange={this.onChange}

      />
      {errors.password && <Inlineerror text = {errors.password} />}

	        
        </FormGroup>
        <button class="btn btn-lg btn-primary btn-block btn-center" type="submit" data-bindattr-3="3">Sign in</button>
        </Form>
       
        
	        <br/>
	        <small class="create-account text-muted">Dont have a [your service] or social network account? <button id="ember363" class="ember-view btn btn-sm btn-default"> Sign Up </button> </small>
          
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
