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

  ngOnInit() {
    if(this.router.url.length == 15){
      this.index = this.router.url.substring(this.router.url.length - 1)
      console.log(this.index)
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
        }
      })
    })
    
  }

  irProHome(){
    this.router.navigate([''])
  }

  

  adicionarAoCarrinho(){
    this.usuariosService.adicionar_carrinho(localStorage.getItem("CODIGO"), this.index)
    alert("Produto adicionado ao carrinho!")
  }
}
