import React, { Component, Fragment } from 'react';
import ModalEnglish from '../components/ModalEnglish'
import Navbar from '../components/Navbar';

class ModalEnglishView extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <ModalEnglish />
      </Fragment>
    );
  }
}

export default ModalEnglishView;