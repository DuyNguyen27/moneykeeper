import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, throwError, Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage/local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private localService: LocalStorageService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.localService.get('token');
    const requestCustom = request.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
      withCredentials: true,
    });
    return next.handle(requestCustom).pipe(
      catchError((error) => {
        if (error.status === 401) {
          this.authService.doLogoutAndRedirectToLogin();
        }
        return throwError(error);
      })
    );
  }
}
