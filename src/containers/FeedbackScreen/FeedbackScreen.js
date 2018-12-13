import React, { Component } from 'react';
import './FeedbackStyle.css';

class FeedbackScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name : "Mohan Rajoria"  
    }
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="feedbackScreenContainer">
        <span>Thank you</span>
        <span>Your submission saved successfully</span>
      </div>
    );
  }
}

export default FeedbackScreen;
