import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';


class Googlelogin extends React.Component {
   responseGoogle = (response) => {
  console.log(response);
}

  render() {
    return (
      
      <GoogleLogin 
       clientId="254425343264-33g017f9faga6e2g20el5e6ebnu5dc67.apps.googleusercontent.com"
       buttonText="Login"
      
       
        
      />
    )
  }
}

export default Googlelogin;