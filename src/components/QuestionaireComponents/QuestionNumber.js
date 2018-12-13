import React, { Component } from 'react';
import '../../containers/Questionaire/QuestionaireStyle.css';

class QuestionNumber extends Component {

  constructor(props) {
    super(props);

    this.moveToQuestionNumber = this.moveToQuestionNumber.bind(this);
  }

  componentWillMount() {

  }

  moveToQuestionNumber(e) {
    
  }

  render() {
    const {questionIndex} = this.props;
    // alert(questionIndex)
    return (
        <div className="questionBtnContainer" id = {questionIndex}>
            <button onClick={this.moveToQuestionNumber}>{questionIndex}</button>
        </div>
    );
  }
}

export default QuestionNumber;
