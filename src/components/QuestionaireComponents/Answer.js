import React, { Component } from 'react';
import '../../containers/Questionaire/QuestionaireStyle.css';

class Answer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value : ""
    }

    this.updateAnswer = this.updateAnswer.bind(this);
    this.answerChange = this.answerChange.bind(this);
  }

  componentWillMount() {

  }

  shouldComponentUpdate() {
    return true;
  }

  componentWillUpdate(nextProps) {
    if(nextProps.answer && nextProps.answer.text != this.state.answer) {
      this.setState({
        answer: nextProps.answer.text,
        id : nextProps.answer.id
      })
    }
  }

  answerChange(e) {
    this.setState({
      value : e.target.value
    })
  }

  updateAnswer() {
    this.props.updateAnswer({id : this.state.id, text : this.state.value});
  }

  render() {
    return (
      <div className="answerContainer">
        <textarea value = {this.state.value} onChange={this.answerChange}></textarea>
        <div><button className="saveAnswer" onClick={this.updateAnswer}>Save</button></div>
      </div>
    );
  }
}

export default Answer;
