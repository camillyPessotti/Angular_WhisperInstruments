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

  ngOnInit() {
    this.usuariosService.buscar_carrinho()
    .then((resultado: any) => {
      console.log(resultado)
    })
  }

  irProLogin(){
    this.router.navigate(['/tela-login'])
  }

  voltar(){
    this.router.navigate([''])
  }

}
