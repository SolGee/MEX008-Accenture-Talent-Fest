import React, { Component, Fragment } from 'react';
import ModalQuestion from '../components/ModalQuestion'
import Navbar from '../components/Navbar';

class ModalQuestionView extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <ModalQuestion />
      </Fragment>
    );
  }
}

export default ModalQuestionView;