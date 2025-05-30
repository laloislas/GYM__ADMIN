import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreService } from "./../store/store.service";
import { Observable } from 'rxjs';
import { App } from 'src/app/model/app.interface';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private store: App;

  // private store: DataApplication;
  constructor(private StoreService: StoreService) {
    this.store = this.StoreService.getState();
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //this.store = this.StoreService.getState();
    const baseUrl = 'http://localhost:3000/api';
    //const baseUrl = 'http://18.190.48.126:8443/api';
    const userData = this.store.currentUser;
    const tokenML = this.store.token;
    const interceptorNone = request.headers.get('interceptorNone'); // Obtener el valor del encabezado


    const pathExcluded = ['./assets/i18n/en.json'];
    if (userData) {
      request = request.clone({
        url: baseUrl + request.url,
        setHeaders: {
          Authorization: `${this.store.token}`
        },
      });
    } else if (!userData) {
      request = request.clone({
        url: baseUrl + request.url,
      });
    }

    return next.handle(request);
  }
}


