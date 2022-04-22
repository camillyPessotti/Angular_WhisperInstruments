import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }


  buscar_clientes() {
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/buscar_clientes', {
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

      fetch('/api/buscar_produtos', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
    })
  }

  adicionar_carrinho(CODIGO, CLIENTE_CODIGO, PRODUTO_CODIGO){
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/adicionar_carrinho', {
        method: 'POST',
        body: JSON.stringify({CODIGO, CLIENTE_CODIGO, PRODUTO_CODIGO}),
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(resolvido)
      .catch(rejeitado);
    })
  }

  buscar_carrinho(){
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/buscar_carrinho', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
    })
  }

  excluir_produto(CODIGO){
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/excluir_produto', {
        method: 'POST',
        body: JSON.stringify({CODIGO}),
        headers: {
          'Content-type': 'application/json'
        }
      }).then(resultado => resultado.json())
      .then(resolvido)
      .catch(rejeitado);
    })
  }

}
