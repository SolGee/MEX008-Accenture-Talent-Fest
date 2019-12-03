import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EnglishOptions extends Component {
  render() {
    return (
      <section id='english-certificate'>
        <h2>Instituciones aceptadas para acreditar idioma</h2>

        <div>
          <Link to='/calendar'>
            <button className='english-btn btn waves-effect waves-light'>
              Coordinación del programa de idiomas
            </button>
          </Link>

          <button className='english-btn btn waves-effect waves-light'>
            Escuela Nacional de Lenguas, Linguística y Traducción
          </button>

          <Link to='/modal-question'>
            <button id='question'>?</button>
          </Link>
        </div>
      </section>
    );
  }
}

export default EnglishOptions;
