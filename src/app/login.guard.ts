import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn : 'root'
})
export class loginGuard implements CanActivate {
  token:any = this.serve.gettoken()
  constructor(
    private serve:LoginService,
    private rout:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.token){
      return true;
    }
    else{
      this.rout.navigate(['/login'])
      return false
    }
  }
};
