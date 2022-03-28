import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login-v2';

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
    private usuariosService: UsuariosService,
    private socialAuthService: AuthService) { }

  ngOnInit() {
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 
    

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.router.navigate(['/tela-carrinho'])
    }
  );
}

  verifica = 0;

  entrar() {
    this.usuariosService.buscar_clientes()
      .then((resultado: any) => {
        resultado.find(valorResultadao => {
          if (valorResultadao.USERNAME == this.user && valorResultadao.PASSWORD == this.password) {
            localStorage.setItem("USER", this.user);
            localStorage.setItem("PASSWORD", this.password);
            this.router.navigate(['/tela-carrinho'])
          } else{
            this.verifica = 1;
          }
        })
      })

      if(this.verifica == 1){
        alert("Usuário não encontrado!");
        this.verifica = 0;
      }
  }


  verSenha() { }
}
