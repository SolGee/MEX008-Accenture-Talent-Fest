import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

import { Link } from 'react-router-dom';

class Sidebar extends Component {
  componentDidMount() {
    var elem = document.querySelector('.sidenav');
    M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250
    });
  }

  render() {
    return (
      <header>
        <nav>
          <div>
            <ul id='slide-out' className='sidenav'>
              <li id='user'>
                <figure id='user-photo'>
                  <img src='./img/user.png' alt='user' />
                </figure>
                <p>Carolina Ramírez Jiménez</p>
              </li>
              <li>
                <div className='divider' />
              </li>
              <li className='waves-effect'>
                <a href='!#'>
                  <i className='material-icons'>find_in_page</i>
                  <p>Revisión de documentos</p>
                </a>
              </li>
              <li className='waves-effect'>
                <a href='!#'>
                  <i className='material-icons'>school</i>
                  <p>Tus opciones de titulación</p>
                </a>
              </li>
              <li className='waves-effect'>
                <Link to='/requirements-checkout'>
                  <i className='material-icons'>directions_walk</i> Tu paso a
                  paso
                </Link>
              </li>
              <li className='waves-effect'>
                <Link to='/'>
                  <i className='material-icons'>close</i>Cerrar sesión
                </Link>
              </li>
            </ul>
            <a href='#' data-target='slide-out' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Sidebar;
