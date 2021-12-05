import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/Services/user.service';
import { Login } from 'src/app/ViewModels/login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string;
  constructor(private userStorage: UserService,private router: Router,private modalService: NgbModal,) { }

  ngOnInit(): void {
    const user_name = this.userStorage.getUserName();
    const user_id = this.userStorage.getUserId();
    // console.log("token in header:  " + token);
    // console.log("user_name in header:  " + user_name);
    // console.log("user_id in header:  " + user_id);
    this.name = user_name;
  }
  OnLogout() {
    localStorage.removeItem('usertoken');
    localStorage.removeItem('user_name');
    this.router.navigate(['']);
  }
 
}
