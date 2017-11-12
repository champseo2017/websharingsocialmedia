import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login-component';
 
export default class Googlelogin extends Component {
  constructor (props, context) {
    super(props, context);
  }

  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }
 
  render () {
 
      
    return (
      <GoogleLogin socialId="254425343264-1um0ughiff125l7omn2i96f8u7vp1d94.apps.googleusercontent.com"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
    );
  }
}