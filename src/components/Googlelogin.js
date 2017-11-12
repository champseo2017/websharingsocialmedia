import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
 
export default class Googlelogin extends Component {
 
  render () {
    const responseGoogle = (response) => {
        console.log(response);
      }
      
    return (
          <GoogleLogin
    clientId="254425343264-33g017f9faga6e2g20el5e6ebnu5dc67.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}/>
    );
  }
}