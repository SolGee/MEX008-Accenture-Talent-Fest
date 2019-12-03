// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';

// // import firebase from '../firebase';
// // import { db } from '../firebase'

// class LoginView extends Component {
//   constructor(props) {
//     super(props);
//     this.state= {
//       matricula: "",
//       nombre: "",
//       valid: null,
//       message: ""
//     };
//   }

//   onChange = e => {
//     const state = this.state;
//     state[e.target.name] = e.target.value;
//     this.setState({ usuario: state});
//   };

//   onClick = e => {
//     const nameToSearch = this.state.matricula;
//     var self = this;
//     db
//     .collection("alumno")
//     .where('matricula', '===', nameToSearch)
//     .get()
//     .then(function(querySnapshot){
//       self.setState({
//         matricula:"",
//         nombre:"",
//         valid: false,
//         message: "NO EXISTE"
//       });
//       querySnapshot.forEach(function(doc){
//         if (doc.exists){
//           const usuario = doc.data();
//           self.setSate({
//             matricula: usuario.matricula,
//             nombre:usuario.nombre,
//             valid: true,
//             message: ""
//           });
//         }
//       });
//     })
//     .catch(function(error){

//     });
//   };
//   render() {
//     const { matricula } = this.state;
//     return (
//  <section>
//       <form>
//         <label htmlFor=''>
//           <p>Ingresa tu No. de cuenta:</p>
//           <input type='text' placeholder='No. de cuenta'  required />
//         </label>
//         <label htmlFor=''>
//           <p>Ingresa tu contraseña:</p>
//           <input type='password' value={matricula} name={"matricula"} placeholder='Contraseña'  onChange={this.onChange} required />
//         </label>
      
//           <button onClick={this.onClick}>Ingresar</button>
        
//         {this.state.valid ? <Redirect to="/confirm-form" /> : ""}
//       </form>
// </section>
//     );
//   }
// }

// export default LoginView;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class LoginView extends Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor=''>
            <p>Ingresa tu No. de cuenta:</p>
            <input type='text' placeholder='No. de cuenta' required />
          </label>
          <label htmlFor=''>
            <p>Ingresa tu contraseña:</p>
            <input type='password' placeholder='Contraseña' required />
          </label>
          <Link to='/confirm-form'>
            <button>Ingresar</button>
          </Link>
        </form>
      </section>
    );
  }
}
export default LoginView;
