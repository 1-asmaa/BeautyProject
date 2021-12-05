import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../ViewModels/category';
import { Cities } from '../ViewModels/cities';
import { Coupon } from '../ViewModels/coupon';
import { Sevice } from '../ViewModels/sevice';
import { User } from '../ViewModels/user';

@Injectable({
  providedIn: 'root'
})
export class AddDataService {
  readonly BaseURI = 'https://beauty.wothoq.co/api';
  readonly cat = 'https://beauty.wothoq.co/api/admins/categories/store';
  tooken = localStorage.getItem('usertoken');
  constructor(private http: HttpClient) { }

  addCoupon(coupon: Coupon): Observable<Coupon> {
    const newBranch = this.http.post<Coupon>(`${this.BaseURI}/admins/coupons/store?lang=en`, coupon);
    return newBranch;
  }

  addCity(city: Cities): Observable<Cities> {
    const newBranch = this.http.post<Cities>(`${this.BaseURI}/admins/cities/store?lang=en`, city);
    return newBranch;
  }

  addcustomer(user: User): Observable<User> {
    const newBranch = this.http.post<User>(`${this.BaseURI}/admins/users/store?lang=en`, user);
    return newBranch;
  }

  addcategories(cate: Category): Observable<Category> {
    const newBranch = this.http.post<Category>(`${this.BaseURI}/admins/categories/store?lang=en`, cate);
    return newBranch;
  }
  addServices(cate: Sevice): Observable<Sevice> {
    const newBranch = this.http.post<Sevice>(`${this.BaseURI}/admins/services/store?lang=en`, cate);
    return newBranch;
  }
 
}
