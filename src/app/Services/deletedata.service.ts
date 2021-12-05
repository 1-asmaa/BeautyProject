import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cities } from '../ViewModels/cities';

@Injectable({
  providedIn: 'root'
})
export class DeletedataService {
  readonly BaseURI = 'https://beauty.wothoq.co/api';
  tooken = localStorage.getItem('usertoken');
  constructor(private http: HttpClient) { }

// tslint:disable-next-line:typedef
deleteCity(city_id: number){
    const httpoptions = {headers: new HttpHeaders({
      'Content-Typpe': 'application/json',
    })};
    return this.http.delete(`${this.BaseURI}/admins/cities/destroy?lang=en&city_id=${city_id}`, httpoptions);
  }

  deleteUser(user_id: number){
    const httpoptions = {headers: new HttpHeaders({
      'Content-Typpe': 'application/json',
    })};
    return this.http.delete(`${this.BaseURI}/admins/users/delete?lang=en&user_id=${user_id}`, httpoptions);
  }

  deleteOrder(order_id: number){
    const httpoptions = {headers: new HttpHeaders({
      'Content-Typpe': 'application/json',
    })};
    return this.http.delete(`${this.BaseURI}/admins/orders/delete?order_id=${order_id}`, httpoptions);
  }
  deleteCategories(category_id: number){
    const httpoptions = {headers: new HttpHeaders({
      'Content-Typpe': 'application/json',
    })};
    return this.http.delete(`${this.BaseURI}/admins/categories/destroy?category_id=${category_id}`, httpoptions);
  }
  deleteServices(service_id: number){
    const httpoptions = {headers: new HttpHeaders({
      'Content-Typpe': 'application/json',
    })};
    return this.http.delete(`${this.BaseURI}/admins/services/destroy?lang=en&service_id=${service_id}`, httpoptions);
  }

  deleteCoupon(coupon_id: number){
    const httpoptions = {headers: new HttpHeaders({
      'Content-Typpe': 'application/json',
    })};
    return this.http.delete(`${this.BaseURI}/admins/coupons/destroy?lang=en&coupon_id=${coupon_id}`, httpoptions);
  }
}
