import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class CalendlyButton extends Component {
  render() {
    return (
      <Fragment>
        <Link to='/modal-english'>
          <button>Agendar</button>
        </Link>
      </Fragment>
    );
  }
}

export default CalendlyButton;
