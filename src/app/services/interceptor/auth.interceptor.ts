import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreService } from "./../store/store.service";
import { Observable, finalize } from 'rxjs';
import { EventService } from '../event/event.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private activeRequests = 0;

  constructor(
    private storeService: StoreService,
    private eventService: EventService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // Si la URL de la solicitud comienza con la ruta de los archivos de traducción,
    // la dejamos pasar sin modificarla.
    if (request.url.startsWith('./assets/i18n/')) {
      return next.handle(request);
    }

    // Para todas las demás solicitudes, aplicamos la lógica de la API.
    // Muestra el loading si es la primera petición activa.
    if (this.activeRequests === 0) {
      this.eventService.showLoading();
    }
    this.activeRequests++;

    const store = this.storeService.getState();
    const baseUrl = 'http://localhost:3000/api';
    //const baseUrl = 'http://18.190.48.126:8443/api';
    const userData = store.currentUser;

    // Clonamos la solicitud para agregar la URL base de la API.
    let apiReq = request.clone({
      url: `${baseUrl}${request.url}`,
    });

    if (userData) {
      // Si hay un usuario, agregamos el token de autorización.
      apiReq = apiReq.clone({
        setHeaders: {
          Authorization: `${store.token}`
        },
      });
    }

    return next.handle(apiReq).pipe(
      finalize(() => {
        this.activeRequests--;
        // Oculta el loading solo cuando todas las peticiones hayan terminado.
        if (this.activeRequests === 0) {
          this.eventService.hideLoading();
        }
      })
    );
  }
}
