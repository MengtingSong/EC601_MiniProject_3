import React, { Component } from "react";
import { UserContext } from "./UserProvider"


export default class TopLevelClass extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <UserContext.Consumer>
      { (context) => (
        <div
        style={{
            position: 'absolute', left: '50%', top: '50%',
            fontSize: '32px',
            textAlign: 'center',
            transform: 'translate(-50%, -50%)'
        }}
        >
        {context.state.isAuthenticated? 'User authenticated!': 'Welcome to Video Object Detection Website!'}
        <img style={{height: 275, display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src="http://res.publicdomainfiles.com/pdf_view/74/13932600015026.png"/>
        </div>
        )
      }

      </UserContext.Consumer>
    );
  }
}
