
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private authService:AngularFireAuth, private rutas:Router)
  {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //  let currentUser=this.autenticacionServicio.login;
  let userLogged = this.authService.authState
if (userLogged)
{
  return true;
}
  else
{
  this.rutas.navigate(['/iniciar-secion']);
  return false;
}


}

}
