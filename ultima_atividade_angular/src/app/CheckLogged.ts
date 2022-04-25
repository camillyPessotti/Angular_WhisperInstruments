import { Injectable } from "@angular/core";


import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class CheckLogged implements CanActivate {
    constructor(
        private router: Router,
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {

        let USER = localStorage.getItem("USER")
        if (USER) {
            return true;
        } else {
            this.router.navigate([''])
            return false;
        }
    }
}