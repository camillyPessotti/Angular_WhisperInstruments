import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  buscar_usuarios() {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/buscar_usuario', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
    })
  }

  buscar_clientes() {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/ver_clientes', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
    })
  }

}
