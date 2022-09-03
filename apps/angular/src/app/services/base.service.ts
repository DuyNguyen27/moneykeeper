import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  protected baseUrl = environment.api_url;

  constructor() {
    this.handleError = this.handleError.bind(this);
  }

  protected handleError(error: HttpErrorResponse) {
    return throwError(error.error);
  }
}
