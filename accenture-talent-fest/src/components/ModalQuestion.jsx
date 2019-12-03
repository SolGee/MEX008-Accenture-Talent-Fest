import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class ModalQuestion extends Component {
  render() {
    return (
      <section>
        <h3>Opciones para obtener tu certificado de idiomas</h3>

        <article>
            <p>
                1. Examen acreditación por la coordinación del programa de idiomas <br/>
                Cada semestre se emité la convocatoria dirigida a estudiantes inscritos y
                a estudiantes en proceso de titulación. (25 lugares)
            </p>
            <p>
                2. Examen acreditación por la Escuela Nacional de Lenguas, Linguística y Traducción <br/>
                El registro para presentar el EDI sólo podrá realizarse una vez por año. Los aspirantes 
                deberán registrarse al EDI.
            </p>

        </article>
        <Link to="/english-option">
        <button>Entendido</button>
        </Link>
      </section>
    );
  }
}

export default ModalQuestion;