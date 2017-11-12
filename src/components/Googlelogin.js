import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
 
export default class Googlelogin extends Component {
 
  render () {
    const responseGoogle = (response) => {
        console.log(response);
      }
      
    return (
          <GoogleLogin
    clientId="254425343264-jfbkd6rp67691nphc1nb1737s5g8cjji.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}/>
    );
  }
}