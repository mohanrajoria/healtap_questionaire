import React, { Component } from 'react';
import '../../containers/Questionaire/QuestionaireStyle.css';

class ArrowBtn extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    const {arrowType} = this.props;
    return (
        <div className="arrowBtnContainer">
            {(arrowType == 'prev')
                ? 
                <button className="prev">{`<`}</button>
                :
                <button className="next">{`>`}</button>
            }
        </div>
    );
  }
}

export default ArrowBtn;
