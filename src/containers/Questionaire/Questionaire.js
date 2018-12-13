import React, { Component } from 'react';
import {connect} from 'react-redux';
import './QuestionaireStyle.css';
import QuestionNumber from '../../components/QuestionaireComponents/QuestionNumber';

import QuestionAnswerSection from '../../components/QuestionaireComponents/QuestionAnswerSection';

import {updateAnswer} from '../../reducers/questionaire';

const mapStateToProps = (state) => {
  return {
            questions : state.questionaire.questions,
            answers : state.questionaire.answers,
            questionIds : state.questionaire.questionIds
        }
};

const mapDispatchToProps = dispatch => ({
  updateAnswer: () => dispatch(updateAnswer())
});

class Questionaire extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentQuestionIndex : 0,
            currentQuestionId : null,
            hasNext : false,
            hasPrev : false,
            totalQuestions : 0
        }

        this.submitQuestionaire = this.submitQuestionaire.bind(this); 
        this.moveToQuestionNumber = this.moveToQuestionNumber.bind(this); 
        this.moveToFeedback = this.moveToFeedback.bind(this);
        this.moveViaArrow = this.moveViaArrow.bind(this);
        this.validateNextPrev = this.validateNextPrev.bind(this);
        this.updateAnswer = this.updateAnswer.bind(this);
    }

  componentWillMount() {

  }

  componentDidMount() {
        let questionId = this.props.questionIds[this.state.currentQuestionIndex];

        if(questionId) {
            let question = this.props.questions[questionId];
            let answerId = question.answerId;
            let answer = this.props.answers[answerId];
            let totalQuestions = this.props.questionIds.length;
            
            this.setState({
                currentQuestionId : questionId,
                currentQuestion : question,
                currentAnswer : {id : question.answerId, text : answer.text},
                totalQuestions : totalQuestions,
                hasNext : (this.props.questionIds.indexOf(questionId) < totalQuestions),
                hasPrev : (this.props.questionIds.indexOf(questionId) > 0 ) 
            })
        }
  }

  shouldComponentUpdate() {
      return true;
  }

  componentWillUpdate(nextProps, nextState) {
        if(this.state.totalQuestions != this.props.questionIds.length)
        this.setState({
            totalQuestions : this.props.questionIds.length,
        })
  }

  submitQuestionaire() {

  }

  moveToQuestionNumber() {

  }

  moveToFeedback() {
      let allSubmitted = true;
      if(allSubmitted) {
        this.props.router.push('/feedbackScreen');
      }
  }

  moveViaArrow() {

  }

  validateNextPrev() {

  }
  
  updateAnswer(answer) {
    let answers = Object.assign({}, this.props.answers);
    answers[answer.id].text = answer.text;
    this.props.updateAnswer(answers);
  }

  render() {
    return (
      <div className="QuestionaireContainer">
        <div className="questionNavigationContainer">
          <div className="questionNumbers">
            
                <QuestionNumber 
                questionIndex = {1} 
                key = {1}
                moveToQuestionNumber = {this.moveToQuestionNumber}
              />
              <QuestionNumber 
                questionIndex = {2} 
                key = {2}
                moveToQuestionNumber = {this.moveToQuestionNumber}
              />
              <QuestionNumber 
                questionIndex = {3} 
                key = {3}
                moveToQuestionNumber = {this.moveToQuestionNumber}
              /> 
              
            
          </div>
          <div className="submissionBtn">
            <button moveToFeedback = {this.moveToFeedback}>Submit</button>
          </div>
        </div>
        <QuestionAnswerSection 
            totalQuestions = {this.state.totalQuestions}
            hasNext = {this.state.hasNext}
            hasPrev = {this.state.hasPrev}
            question = {this.state.currentQuestion}
            answer = {this.state.currentAnswer}
            moveToFeedback = {this.moveToFeedback}
            updateAnswer = {this.updateAnswer}
            questionId = {this.state.currentQuestionId}
        />
      </div>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Questionaire);
