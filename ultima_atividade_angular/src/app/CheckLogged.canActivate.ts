import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { UsuariosService } from "./services/usuarios.service";

@Injectable()
class CheckLoggedProfessor implements CanActivate {
    constructor(
        private router: Router,
        private usuariosService: UsuariosService
    ) { }

    url = this.router.url
    urlNumber = Number(this.url.charAt(this.url.length - 2))
    certificar

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {

        let user = localStorage.getItem("USER")
        let password = localStorage.getItem("PASSWORD")

        if (!user && !password) {
            this.router.navigate([''])
            return false;
        } else {
            this.usuariosService.buscar_clientes()
                .then((resultado: any) => {
                    resultado.find(valorResultadao => {
                        if (valorResultadao.USERNAME == user && valorResultadao.PASSSWORD == password) {
                            localStorage.setItem('USER', user);
                            this.router.navigate([''])
                        }
                    })
                })
        }

        if (this.certificar) {
            return true
        }

        return true
    }
}

interface pessoa {
    EMAIL: string
    IDADE: number
    NOME: string
    PROFESSOR: boolean
    RG: string
    SENHA: string
    SEXO: string
    USUARIO: string
}

export default CheckLoggedProfessor;