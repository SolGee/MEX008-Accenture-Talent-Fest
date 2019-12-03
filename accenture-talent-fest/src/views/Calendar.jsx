import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CalendlyButton from '../components/CalendlyButton';

class Calendar extends Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    head.appendChild(script);
  }

  componentWillUnmount() {}
  render() {
    return (
      <Fragment>
        <Navbar />

        <div
          className='calendly-inline-widget'
          data-url='https://calendly.com/acreditacionidioma-unam'
          style={{ minWidth: '320px', height: '80vh' }}></div>

        <CalendlyButton />
      </Fragment>
    );
  }
}

export default Calendar;
