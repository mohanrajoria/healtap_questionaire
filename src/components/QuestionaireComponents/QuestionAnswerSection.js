import React, { Component } from 'react';
import '../../containers/Questionaire/QuestionaireStyle.css';

import Question from './Question';
import Answer from './Answer';
import ArrowBtn from './ArrowBtn';

class QuestionAnswerSection extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  

  render() {
    const {question, questionId, answer, currentQuestionNumber, totalQuestions, hasNext, hasPrev, moveToFeedback} = this.props; 
    return (
      <div className="QuestionAnswerSectionContainer">
        {
          (hasPrev) ?
          (<ArrowBtn arrowType = {`prev`}/>) : 
          null
        }
        <div className="questionAnswer">
            <Question question = {question}/>
            <Answer
              answer = {answer}
              updateAnswer = {this.props.updateAnswer}
            />
        </div>
        {
          (hasNext) ?
          (<ArrowBtn arrowType = {`next`} />) : 
          null
        }
      </div>
    );
  }
}

export default QuestionAnswerSection;
