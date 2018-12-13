import React, { Component } from 'react';
import '../../containers/Questionaire/QuestionaireStyle.css';

class Question extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    const {question} = this.props;
    return (
      <div className="QuestionContainer">
        <div>{question ? question.text : ""}</div>
      </div>
    );
  }
}

export default Question;
