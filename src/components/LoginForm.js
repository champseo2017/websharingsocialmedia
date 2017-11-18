import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import validator from 'validator';
import Inlineerror from './Inlineerror';
import PropTypes from "prop-types";
import MyComponent from './MyComponent';
import Googlelogin from './Googlelogin';

export default class LoginForm extends Component {
    
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
    
      onSubmit = (e) =>{
        e.preventDefault()
        
            const errors = this.validate(this.state.data);
            this.setState({ errors });
            if (Object.keys(errors).length === 0){
              this.props.submit(this.state.data);
            }
          };
      validate = (data) => {
        const errors ={};
        if(!validator.isEmail(data.email)) errors.email ="กรุณากรอก Email";
        if(!data.password) errors.password = "กรุณากรอกรหัสผ่าน";
    
        return errors;
      }
    
      render() {
        const{data, errors} = this.state;
        console.log(this.props)
        return (
    <div>
            <Form className="form-signin"  onSubmit={this.onSubmit}>
            <h2 class="form-signin-heading">Sign in</h2>
            
           
                <p>
                <MyComponent />
                
                <Googlelogin />
             </p>
            
    
    <small class="text-muted">Or sign in with</small>
                <br/><br/>
            <FormGroup error={!!errors.email}>
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
            </FormGroup>
           
            <FormGroup error={!!errors.password}>
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
        );
      }
    }
    
    LoginForm.PropTypes ={
    submit: PropTypes.func.isRequired
    };
    