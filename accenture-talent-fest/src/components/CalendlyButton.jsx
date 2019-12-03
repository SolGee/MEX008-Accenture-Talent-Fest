import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class CalendlyButton extends Component {
  render() {
    return (
      <Fragment>
        <div className='calendly-btn-container'>
          <Link to='/modal-english'>
            <button className='calendly-btn'>Agendar</button>
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default CalendlyButton;
