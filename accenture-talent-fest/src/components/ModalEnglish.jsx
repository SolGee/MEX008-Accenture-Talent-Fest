import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class ModalEnglish extends Component {
  render() {
    return (
      <section>
        <h3>Requisitos para presentar el examen</h3>

        <article>
            <p>
                Deberás: <br/><br/>
                1. Acudir en el día, lugar y hora especificados. <br/><br/>
                2. Presentar comprobante de inscripción al examen. <br/><br/>
                3. Identificación oficial. <br/><br/>

                Se publicarán los resultados en un plazo máximo de veinte
                días hábiles contados a partir de la fecha de aplicacion
                del examen.
            </p><br/>

        </article>
        <Link to="/requirements-checkout">
        <button className="button-agree">Entendido</button>
        </Link>
      </section>
    );
  }
}

export default ModalEnglish;