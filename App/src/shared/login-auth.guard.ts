import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginAuthGuard implements CanActivate {

  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const tipo = localStorage.getItem('escuelavlc-tipo');

      if (tipo) {
        switch(tipo) {
          case '0':
            this.router.navigate(['/tabs/alumnos']);
            break;
          default:
            this.router.navigate(['/tabs/day']);
            break;
        }
      return false;
    } else {
      return true;
    }
  }
}
