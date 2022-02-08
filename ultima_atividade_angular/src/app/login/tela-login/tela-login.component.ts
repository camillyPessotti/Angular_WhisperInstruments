import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  user = '';
  password = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.buscar_usuarios()
    .then(resultado => {
      console.log('RESULTADO:', resultado);
    }).catch(erro => {
      console.log('ERRO AO BUSCAR USUARIOS:', erro);
    })
  }

  entrar(){
    localStorage.setItem('USER', this.user);
    localStorage.setItem('PASSWORD', this.password);
    this.router.navigate([''])
  }

  entrarGoogle(){}

  verSenha(){}

}
