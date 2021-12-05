import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../ViewModels/category';
import { Cities } from '../ViewModels/cities';
import { Coupon } from '../ViewModels/coupon';
import { Home } from '../ViewModels/home';
import { Orders } from '../ViewModels/orders';
import { Provider } from '../ViewModels/provider';
import { Sevice } from '../ViewModels/sevice';
import { User } from '../ViewModels/user';

@Injectable({
  providedIn: 'root'
})
export class GetalldataService {

  constructor(private http: HttpClient) { }
  readonly BaseURI = 'https://beauty.wothoq.co/api';
  tooken = localStorage.getItem('usertoken');

  getAllcoupon(): Observable<Coupon[]> {
    const newLocal = this.http.get<Coupon[]>(`${this.BaseURI}/admins/coupons/get-all-coupons?lang=en`);
    return newLocal;
  }
  //getOneCoupon
  getcouponById( coupon_id:number): Observable<Coupon> {
    const newLocal = this.http.get<Coupon>(`${this.BaseURI}/admins/coupons/get-coupon?lang=en&coupon_id=${coupon_id}`);
    return newLocal;
  }

  getAllcities(): Observable<Cities[]> {
    const newLocal = this.http.get<Cities[]>(`${this.BaseURI}/admins/cities/get-all-cities?lang=en`);
    return newLocal;
  }
  getcityById(city_id:number): Observable<Cities> {
    const newLocal = this.http.get<Cities>(`${this.BaseURI}/admins/cities/get-city?lang=en&city_id=${city_id}`);
    return newLocal;
  }

  getAlluser(): Observable<User[]> {
    const newLocal = this.http.get<User[]>(`${this.BaseURI}/admins/users/get-all-users?lang=en`);
    return newLocal;
  }
  

  getAllcomment(): Observable<Comment[]> {
    const newLocal = this.http.get<Comment[]>(`${this.BaseURI}/admins/rates/get-all-rates?lang=en`);
    return newLocal;
  }

  getAllprovider(): Observable<Provider[]> {
    const newLocal = this.http.get<Provider[]>(`${this.BaseURI}/admins/provider/get-all-provider?lang=en`);
    return newLocal;
  }
  getAllnewprovider(): Observable<Provider[]> {
    const newLocal = this.http.get<Provider[]>(`${this.BaseURI}/admins/provider/get-new-provider?lang=en`);
    return newLocal;
  }
  getproviderById(beautician_id:number): Observable<Provider> {
    const newLocal = this.http.get<Provider>(`${this.BaseURI}/admins/provider/get-provider?lang=en&beautician_id=${beautician_id}`);
    return newLocal;
  }
  getAllorder(): Observable<Orders[]> {
    const newLocal = this.http.get<Orders[]>(`${this.BaseURI}/admins/orders/get-all-orders?lang=en`);
    return newLocal;
  }
  getorderById(order_id:number): Observable<Orders> {
    const newLocal = this.http.get<Orders>(`${this.BaseURI}/admins/orders/get-order?lang=en&order_id=${order_id}`);
    return newLocal;
  }
  getAllcategory(): Observable<Category[]> {
    const newLocal = this.http.get<Category[]>(`${this.BaseURI}/admins/categories/get-all-categories?lang=en`);
    return newLocal;
  }
  getAllservice(): Observable<Sevice[]> {
    const newLocal = this.http.get<Sevice[]>(`${this.BaseURI}/admins/services/get-all-services?lang=en`);
    return newLocal;
  }
  // tslint:disable-next-line:variable-name
  getAllBeautService( beautician_id: number): Observable<Sevice[]> {
    const newLocal = this.http.get<Sevice[]>(`${this.BaseURI}/admins/services/get-beautician-services?lang=en&beautician_id=${beautician_id}`);
    return newLocal;
  }
  dashboardData(): Observable<Home[]> {
    const newLocal = this.http.get<Home[]>(`${this.BaseURI}/admins/dashboard/home`);
    return newLocal;
  }
}
