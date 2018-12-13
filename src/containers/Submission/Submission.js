import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Submission.css';

const mapStateToProps = (state) => {
  return {
            questions : state.questionaire.questions,
            answers : state.questionaire.answers
        }
};

const mapDispatchToProps = dispatch => ({});

class Submission extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="submissionContainer">
        Submission Screen
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Submission);
