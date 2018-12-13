import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import FeedbackScreen from '../FeedbackScreen/FeedbackScreen';
import Questionaire from '../Questionaire/Questionaire';
import Submission from '../Submission/Submission';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Questionaire} />
        <Route path='/submission' component={Submission} />
        <Route path='/feedback' component={FeedbackScreen} />
      </Router>
    )
  }
}

export default App;