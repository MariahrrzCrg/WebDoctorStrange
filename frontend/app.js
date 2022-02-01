import "./styles/app.css";

import usuario from './models/usuario.js';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderUsuario();
});


document.getElementById('usuario-form')
  .addEventListener('submit', function(e) {

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const sexo= document.getElementById('sexo').value;
    const fecNac= document.getElementById('fecNac').value;
    const nacionalidad= document.getElementById('nacionalidad').value;
    const tajetadeCredito= document.getElementById('tajetadeCredito').value;
    
   

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('apellido', apellido);
    formData.append('email', email);
    formData.append('sexo', sexo);
    formData.append('fecNac', fecNac);
    formData.append('nacionalidad', nacionalidad);
    formData.append('tajetadeCredito', tajetadeCredito);
    
   
    

    
    const ui = new UI();

    
    const usuario = new usuario(nombre, apellido, email,fecNac,nacionalidad,sexo,tajetadeCredito);

    
    if (nombre === '' || apellido === '' || email === ''  || fecNac == '' || nacionalidad == '' || sexo == '' ||tajetadeCredito =='')   {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      
      ui.addANewUsuario(formData);
      ui.renderMessage('New Usuario Added Successfully', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('usuario-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteUsuario(e.target.getAttribute('_id'));
      ui.renderMessage('Usuario Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
