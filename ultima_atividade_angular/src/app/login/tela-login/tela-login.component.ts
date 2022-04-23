import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import Swal from 'sweetalert2';

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
    };

    this.socialAuthService.signIn(socialPlatformProvider)
    .then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.router.navigate(['/tela-carrinho']);
    })
};

  verifica;
  CODIGO;

  entrar() {
    this.usuariosService.buscar_clientes()
      .then((resultado: any) => {
        for(let i = 0; i < resultado.length; i++ ){
          if (resultado[i].USERNAME == this.user && resultado[i].PASSWORD == this.password) {
            localStorage.setItem("USER", this.user);
            localStorage.setItem("PASSWORD", this.password);
            if(resultado[i].USERNAME == localStorage.getItem("USER") && resultado[i].PASSWORD == localStorage.getItem("PASSWORD")) {
              this.CODIGO = resultado[i].CODIGO;
              localStorage.setItem("CODIGO", this.CODIGO);
            }
            this.router.navigate(['/tela-carrinho']);
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              }
            });
            
            Toast.fire({
              icon: 'success',
              title: 'Conectado com sucesso!'
            });
            break;
          };

          if(i == resultado.length - 1){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Usuário inválido!'
            });
          };
        };
      });
  };


  mostrarSenha() {
    let inputSenha = document.getElementById("input-senha") as HTMLInputElement;
    let iconVerSenha = document.getElementById("icon-ver-senha");

    if(inputSenha.type == "password"){
      iconVerSenha.className = "fi fi-rr-eye-crossed";
      inputSenha.type = "text";
    } else {
      iconVerSenha.className = "fi fi-rr-eye";
      inputSenha.type = "password";
    };
  };
};
