import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
 
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
      <div>
        <GoogleLogin socialId="254425343264-33g017f9faga6e2g20el5e6ebnu5dc67.apps.googleusercontent.com"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
      </div>
    );
  }
}