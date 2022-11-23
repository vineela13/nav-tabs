import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log(request);
    let email = ''
    let secret = ''
    // console.log(Object.values);
    Object.values(sessionStorage).forEach(x => {
      if (x.includes('idTokenClaims')) {
        const value = JSON.parse(x);
        email = value.idTokenClaims.emails[0];
        Object.values(sessionStorage).forEach(x => {
          if (x.includes('realm') && !x.includes('idTokenClaims')) {
            if (JSON.parse(x).secret) {
              secret = JSON.parse(x).secret;
              // console.log(secret);

            }
          }
        })
      }
    });
    var headers = request.headers.append("Authorization", "Bearer " + secret);
    request = request.clone({ headers });
    return next.handle(request);
  }
}
