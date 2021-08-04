import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('JWT_TOKEN');
    if (request.url.includes('http://54.204.208.51:8080/api/user/token')) {
      console.log("login")
    } else {
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type': `application/json`,
          'Authorization': 'Token ' + token,
        }),
      });
    }
    return next.handle(request);
  }
}
