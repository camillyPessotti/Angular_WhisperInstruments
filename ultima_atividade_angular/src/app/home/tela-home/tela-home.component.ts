import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-tela-home',
  templateUrl: './tela-home.component.html',
  styleUrls: ['./tela-home.component.css']
})
export class TelaHomeComponent implements OnInit {

  listaProduto = []

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    this.usuariosService.buscar_produtos()
    .then((resultado: any) => {
      resultado.find(valorResultado => {
        this.listaProduto.push(valorResultado)
      })
    })
  }

  fazerLogin(){
    this.router.navigate(['/tela-login'])
  }

  irProCarrinho(){
    this.router.navigate(['/tela-carrinho'])
  }

  verProduto(i){
    this.router.navigate(['/tela-produto', i])
  }
  
}
