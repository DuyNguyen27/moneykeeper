import { Injectable } from '@angular/core';
import { SignInModel, SignUpModel } from '../models/form.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { BaseService } from './base.service';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage/local-storage.service';
import { jwtDecode } from '../helpers/utils.helper';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  authUrl: string;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ) {
    super();
    this.authUrl = this.baseUrl + '/auth';
  }

  public isAuthenticated(): boolean {
    const token = this.getToken('token');
    if (!token) return false;
    const payload = jwtDecode(token);
    if (Date.now() >= payload?.exp * 1000) {
      return false;
    }
    return true;
  }

  public login(
    formData: SignInModel
  ): Observable<User | HttpErrorResponse['error']> {
    return this.httpClient
      .post<User>(`${this.authUrl}/login`, formData)
      .pipe(catchError(this.handleError));
  }

  public register(
    formData: SignUpModel
  ): Observable<User | HttpErrorResponse['error']> {
    return this.httpClient
      .post<User>(`${this.authUrl}/register`, formData)
      .pipe(catchError(this.handleError));
  }

  public doLogoutAndRedirectToLogin() {
    this.localStorage.clear();
    this.router.navigate(['/auth']);
  }

  public getToken(name: string): string {
    return this.localStorage.get(name);
  }
}
