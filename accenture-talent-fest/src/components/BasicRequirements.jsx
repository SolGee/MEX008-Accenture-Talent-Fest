import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BasicRequirements extends Component {
  render() {
    return (
      <section id='english-section'>
        <h2>Elige el requisito que necesitas cubrir</h2>

        <form action='#'>
          <p>
            <label>
              <input type='checkbox' checked='checked' disabled='disabled' />
              <span>
                100% de créditos del plan de estudios y el número total de
                asignaturas.
              </span>
            </label>
          </p>
          <p>
            <label>
              <input type='checkbox' checked='checked' disabled='disabled' />
              <span>
                Acreditado servicio social. Carta Única de Liberación.
              </span>
            </label>
          </p>
          <p>
            <label>
              <input type='checkbox' />
              <span>Acreditación idioma.</span>
            </label>
          </p>
          <div>
            <Link to='/english-option'>
              <button
                className='english-btn btn waves-effect waves-light'
                type='submit'
                name='action'>
                Confirmar
              </button>
            </Link>
          </div>
        </form>
      </section>
    );
  }
}

export default BasicRequirements;
