import React, { Component, Fragment } from 'react';
import RequirementsCheckout from '../components/RequirementsCheckout'
import Navbar from '../components/Navbar';

class RequirementsCheckoutView extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <RequirementsCheckout />
      </Fragment>
    );
  }
}

export default RequirementsCheckoutView;