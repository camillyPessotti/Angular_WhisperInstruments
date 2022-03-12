import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }


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


  buscar_produtos(){
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/ver_produtos', {
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
