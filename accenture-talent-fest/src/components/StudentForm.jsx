import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class StudentForm extends Component {
  render() {
    return (
      <section>
        <h2>Verifica tu información</h2>

        <form className='student-form'>
          <label htmlFor=''>
            <p>Nombre</p>
          </label>
          <input type='text' value='Carolina Ramírez Jiménez' readonly />
          <label htmlFor=''>
            <p>Fecha de Nacimiento</p>
          </label>
          <input type='text' value='10 marzo 1999' readonly />
          <label htmlFor=''>
            <p>Carrera</p>
          </label>
          <input type='text' value='Ciencias políticas' readonly />
          <label htmlFor=''>
            <p>Status</p>
          </label>
          <input type='text' value='Egresado' readonly />

          <label htmlFor=''>
            <p>Año de Ingreso</p>
          </label>
          <input type='text' value='2015' readonly />
          <div>
            <Link to='/basic-requirements'>
              <button>Confirmar</button>
            </Link>
            <p>
              ¿Tu información no corresponde? <br /> Comunícate al 57 45 36 32
            </p>
          </div>
        </form>
      </section>
    );
  }
}

export default StudentForm;
