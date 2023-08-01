import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(
    private serve:LoginService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.serve.gettoken();
    // console.log(token);
    
    if(token){
      request = request.clone({
        setHeaders:{
          'Authorization':`BslogiKey ${token}`
        }
      })
      // console.log(request.method);
      
    }
    return next.handle(request);
  }
}
