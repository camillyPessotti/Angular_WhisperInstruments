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

  adicionar_carrinho(CLIENTE_CODIGO, PRODUTO_CODIGO){
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/adicionar_carrinho', {
        method: 'POST',
        body: JSON.stringify({CLIENTE_CODIGO, PRODUTO_CODIGO}),
        headers: {
          'Content-type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
    })
  }

  buscar_carrinho(){
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/ver_carrinho', {
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
