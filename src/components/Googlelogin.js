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
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    className="btn btn-primary social-login-btn social-google"

    buttonText=""
    >
    <i 
    className='fa fa-google-plus'
  />
  </GoogleLogin>
    );
  }
}