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

  verifica
  CODIGO

  entrar() {
    this.usuariosService.buscar_clientes()
      .then((resultado: any) => {
        for(let i = 0; i < resultado.length; i++ ){
          if (resultado[i].USERNAME == this.user && resultado[i].PASSWORD == this.password) {
            localStorage.setItem("USER", this.user);
            localStorage.setItem("PASSWORD", this.password);
            if(resultado[i].USERNAME == localStorage.getItem("USER") && resultado[i].PASSWORD == localStorage.getItem("PASSWORD")) {
              this.CODIGO = resultado[i].CODIGO;
              localStorage.setItem("CODIGO", this.CODIGO)
            }
            this.router.navigate(['/tela-carrinho']);
            break;
          }
          if(i == resultado.length - 1){
            alert("Usuário inválido!");
          }
        }
      })
  }


  verSenha() { }
}
