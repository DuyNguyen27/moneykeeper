import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  userUrl = this.baseUrl + '/user';
  constructor(private httpClient: HttpClient) {
    super();
  }

  public getCurrentUserInfo(): Observable<User | HttpErrorResponse['error']> {
    return this.httpClient
      .get<User>(`${this.userUrl}`)
      .pipe(catchError(this.handleError));
  }
}
