import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RequirementsCheckout extends Component {
  render() {
    return (
      <section>
        <h2>Paso a paso</h2>
        <h3>1. Requisitos Básicos</h3>

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
        <input type="checkbox" disabled="disabled"/>
        <span>Acreditación de segundo idioma</span>
      </label>
    </p>
  
          <Link to='/english-option'>
            <button
              class='btn waves-effect waves-light'
              type='submit'
              name='action'>
              <i class='material-icons right'>star</i>
              Recolecta recompensa
            </button>
          </Link>
        </form>
        <h3>2. Modalidades de titulación</h3>
        <label htmlFor=''>
          </label>
          <input type='text' value='Completa el primer paso para desbloquear esta opción' readonly />
      </section>
    );
  }
}

export default RequirementsCheckout;
