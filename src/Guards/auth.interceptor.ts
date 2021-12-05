import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { GetalldataService } from 'src/app/Services/getalldata.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private myApi: GetalldataService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('usertoken');

    if (token && request.url.includes(`${this.myApi.BaseURI}/admins/coupons/get-all-coupons?lang=en` ) || ( `${this.myApi.BaseURI}/admins/cities/get-all-cities`)
    || (`${this.myApi.BaseURI}/admins/users/get-all-users?lang=en`)||(`${this.myApi.BaseURI}/admins/rates/get-all-rates?lang=en`)
    || (`${this.myApi.BaseURI}/admins/provider/get-all-provider?lang=en`) || (`${this.myApi.BaseURI}/admins/orders/get-all-orders?lang=en`)
    || (`${this.myApi.BaseURI}/admins/categories/get-all-categories?lang=en`)) {
      request = request.clone({headers: request.headers.set('Authorization', 'Bearer' + token)});
      return next.handle(request);
    }
    else{
    return next.handle(request);
  }
  }
}
