import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../ViewModels/category';
import { Cities } from '../ViewModels/cities';
import { Coupon } from '../ViewModels/coupon';
import { Login } from '../ViewModels/login';
import { Orders } from '../ViewModels/orders';
import { Sevice } from '../ViewModels/sevice';
import { User } from '../ViewModels/user';

@Injectable({
  providedIn: 'root'
})
export class EditdataService {
  readonly BaseURI = 'https://beauty.wothoq.co/api';
  constructor(private http: HttpClient) { }

  updateCity( city: Cities): Observable<Cities> {
    const httpoptions = {headers: new HttpHeaders({
      'Content-Typpe': 'application/json',
    })};
    return this.http.put<Cities>(`${this.BaseURI}/admins/cities/update?lang=en`, city, httpoptions);
  }

  updateUser( user: User): Observable<User> {
    const httpoptions = {headers: new HttpHeaders({
      'Content-Typpe': 'application/json',
    })};
    return this.http.put<User>(`${this.BaseURI}/admins/users/update?lang=en`, user, httpoptions);
  }

  updateUserstatus( user: User): Observable<User> {
    const httpoptions = {headers: new HttpHeaders({
      'Content-Typpe': 'application/json',
    })};
    return this.http.put<User>(`${this.BaseURI}/admins/users/update?lang=en`, user, httpoptions);
  }

  updateOrder( order: Orders): Observable<Orders> {
    const httpoptions = {headers: new HttpHeaders({
      'Content-Typpe': 'application/json',
    })};
    return this.http.put<Orders>(`${this.BaseURI}/admins/orders/update?lang=en`, order, httpoptions);
  }
  updateOrderStatus( order: Orders): Observable<Orders> {
    const httpoptions = {headers: new HttpHeaders({
      'Content-Typpe': 'application/json',
    })};
    return this.http.post<Orders>(`${this.BaseURI}/admins/orders/change-status?lang=en`, order, httpoptions);
  }
  updateCoupon( coupon: Coupon): Observable<Coupon> {
    const httpoptions = {headers: new HttpHeaders({
      'Content-Typpe': 'application/json',
    })};
    return this.http.put<Coupon>(`${this.BaseURI}/admins/coupons/update?lang=en`, coupon, httpoptions);
  }

  updateCategory( cat: Category): Observable<Category> {
    const httpoptions = {headers: new HttpHeaders({
      'Content-Typpe': 'application/json',
    })};
    return this.http.put<Category>(`${this.BaseURI}/admins/categories/update?lang=en`, cat, httpoptions);
  }
  updateٍService( service:Sevice): Observable<Sevice> {
    const httpoptions = {headers: new HttpHeaders({
      'Content-Typpe': 'application/json',
    })};
    return this.http.put<Sevice>(`${this.BaseURI}/admins/services/update?lang=en`, service, httpoptions);
  }
  updateٍProfile( profile:Login): Observable<Login> {
    const httpoptions = {headers: new HttpHeaders({
      'Content-Typpe': 'application/json',
    })};
    return this.http.put<Login>(`${this.BaseURI}/admins/profile/update?lang=en`, profile, httpoptions);
  }
}
