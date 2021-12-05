import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class LogindataService {
  
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  userAuth(email: string, password: number) {

    var data = { email: email, password: password };

    return this.http.post('https://beauty.wothoq.co/api/admins/auth/login', data);
  }
  // tslint:disable-next-line:typedef
  


  login(token) {
    localStorage.setItem('usertoken', token);
    console.log(token);
  }
  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('usertoken');
    localStorage.removeItem('username');
  }
}
