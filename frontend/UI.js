import UsuarioService from './services/UsuarioService';
const UsuarioService = new UsuarioService();

import { format } from 'timeago.js';

class UI {

  async renderUsuario() {
    const Usuario = await UsuarioService.getUsuario();
    const usuarioCardContainer = document.getElementById('usuario-cards');
    usuarioCardContainer.innerHTML = '';
    Usuario.forEach((usuario) => {
      const div = document.createElement('div');
      div.className = 'animated fadeInRight';
      div.innerHTML = `
      <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h4 class="card-title">${Usuario}</h4>
                    <p class="card-text">${Usuario.author}</p>
                    <a href="#" class="btn btn-danger delete" _id="${Usuario._id}">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(usuario.created_at)}
        </div>
      </div>
      `;
      booksCardContainer.appendChild(div);
    });
  }

  async addANewUsuario(usuario) {
    await UsuarioService.postUsuario(usuario);
    this.renderUsuario();
    this.clearUsuarioForm();
  }

  clearUsuarioForm() {
    document.getElementById('Usuario-form').reset();
    document.getElementById('title').focus();
  }

  renderMessage(message, colorMessage, secondsToRemove) {
    // Creating a div
    const div = document.createElement('div');
    // Styling the div
    div.className = `message ${colorMessage}`;
    // Adding Text to the div
    div.appendChild(document.createTextNode(message));
    // Puting in the documnet
    const container = document.querySelector('.col-md-4');
    const bookForm = document.querySelector('#book-form');
    container.insertBefore(div, usuarioForm);
    // Removing the div after some secconds
    setTimeout(() => {
      document.querySelector('.message').remove();
    }, secondsToRemove);
  }

  async deleteBook(UsuairoId) {
    await UsuarioService.deleteBook(UsuarioId);
    this.renderUsuario();
  }

}

export default UI;
