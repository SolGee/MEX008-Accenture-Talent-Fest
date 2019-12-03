import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EnglishOptions extends Component {
  render() {
    return (
      <section id='english-certificate'>
        <h2>Elige la institución que prefieras para acreditar idioma</h2>

        <div>
          <p>
            Examen acreditación por la coordinación del programa de idiomas de
            la universidad. (25 lugares disponibles. 1 trámite.)
          </p>
          <Link to='/calendar'>
            <button className='english-btn btn waves-effect waves-light'>
              Coordinación del programa de idiomas
            </button>
          </Link>

          <p>
            Examen acreditación por la Escuela Nacional de Lenguas, Linguística
            y Traducción. (2 trámites).
          </p>

          <button className='english-btn btn waves-effect waves-light'>
            Escuela Nacional de Lenguas, Linguística y Traducción
          </button>
        </div>
      </section>
    );
  }
}

export default EnglishOptions;
