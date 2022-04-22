import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';


@Component({
  selector: 'app-tela-carrinho',
  templateUrl: './tela-carrinho.component.html',
  styleUrls: ['./tela-carrinho.component.css']
})
export class TelaCarrinhoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuariosService,
  ) {}

  lista = [];
  codigo

  ngOnInit() {
    this.usuariosService.buscar_carrinho()
    .then((resultados: any) => {
      resultados.forEach(resultado => {
      if(resultado.CLIENTE_CODIGO == localStorage.getItem("CODIGO")){
        this.usuariosService.buscar_produtos()
        .then((resultadosProduto: any) => {
            resultadosProduto.find(produto => {
              if(produto.CODIGO == resultado.PRODUTO_CODIGO){
                this.lista.push(produto);
              }
            })
        })
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

  excluirProduto(idProduto){
    this.usuariosService.buscar_carrinho()
    .then((resultados: any) => {
      resultados.find(resultado => {
        if(resultado.CLIENTE_CODIGO == localStorage.getItem("CODIGO")){
          if(resultado.PRODUTO_CODIGO == idProduto){
            this.usuariosService.excluir_produto(resultado.CODIGO)
            location.reload()
          }
        }
      })
    })   
  }
}