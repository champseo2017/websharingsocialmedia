import React from 'react';
import FacebookLogin from 'react-facebook-login';


class MyComponent extends React.Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      
      <FacebookLogin 
        appId="214044309053868"
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,user_friends,user_actions.books"
        callback={this.responseFacebook}
        cssClass="btn btn-primary social-login-btn social-facebook"
        icon="fa fa-facebook"
        textButton=""
       
        
      />
    )
  }
}

export default MyComponent;