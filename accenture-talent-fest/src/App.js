import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Components
import Login from './views/LoginView';
import StudentFormView from './views/StudentFormView';
import BasicRequirementsView from './views/BasicRequirementsView';
import EnglishOptions from './views/EnglishOptionsView';
import Calendar from './views/Calendar';

import ModalQuestionView from './views/ModalQuestionView';
import RequirementsCheckoutView from './views/RequirementsCheckoutView';
import ModalEnglishView from './views/ModalEnglishView';


class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path='/' component={Login} />
        <Route path='/confirm-form' component={StudentFormView} />
        <Route path='/basic-requirements' component={BasicRequirementsView} />
        <Route path='/english-option' component={EnglishOptions} />
        <Route path='/calendar' component={Calendar} />

        <Route path='/modal-question' component={ModalQuestionView} />
        <Route path='/requirements-checkout' component={RequirementsCheckoutView} />
        <Route path='/modal-english' component={ModalEnglishView} />

      </Router>
    );
  }
}

export default App;
