import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-tela-produto',
  templateUrl: './tela-produto.component.html',
  styleUrls: ['./tela-produto.component.css']
})
export class TelaProdutoComponent implements OnInit {

  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) { }

    index
    url
    instrumento
    nome
    valor
    imagem
    marca
    cor
    descricao
    verificacao

  ngOnInit() {
    if(this.router.url.length == 15){
      this.index = this.router.url.substring(this.router.url.length - 1)
    } else if(this.router.url.length == 16){
      this.index = this.router.url.substring(this.router.url.length - 2)
    } else{
      this.router.navigate([''])
    }

    this.usuariosService.buscar_produtos()
    .then((resultado : any) => {
      resultado.find(valor => {
        if(valor.CODIGO == this.index){
          this.url = valor.URL
          this.instrumento = valor.INSTRUMENTO
          this.nome = valor.NOME
          this.valor = valor.VALOR
          this.imagem = valor.URL
          this.marca = valor.MARCA
          this.cor = valor.COR
          this.descricao = valor.DESCRICAO
          this.index = valor.CODIGO
        }
      })
    })
    
  }

  fazerLogin(){
    this.router.navigate(['/tela-login'])
  }

  irProHome(){
    this.router.navigate([''])
  }

  async adicionarAoCarrinho(){
    if(localStorage.getItem("CODIGO")){
      await this.usuariosService.buscar_carrinho()
      .then((resultado: any) => {
        console.log(resultado)
        if(resultado.length == 0){
          this.verificacao = true;
        } else {

          for(let i = 0; i < resultado.length; i++){
            if(resultado[i].PRODUTO_CODIGO == this.index){
              this.verificacao = false;
              i = resultado.length;
            } else {
              this.verificacao = true;
            }
          }
        }

        console.log(this.verificacao);

        if(this.verificacao == true){
          this.usuariosService.adicionar_carrinho((resultado.length+1), localStorage.getItem("CODIGO"), this.index);
          this.irProHome();
        } else if(this.verificacao == false){

          alert("Este produto já está adicionado ao seu carrinho!")
        }
        console.log(resultado)
    })
    } else {
      console.log("Entrou 11")
      alert("Você precisa estar logado para realizar esta ação!")
      this.router.navigate(['/tela-login'])
    }
  }
}
