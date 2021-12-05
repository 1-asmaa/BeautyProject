import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogindataService } from '../Services/logindata.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  email: string;
  password: number;
  constructor(private LoginService: LogindataService, private router: Router,
              private userStorage: UserService) { }

  ngOnInit(): void {
  }
  userAuth()
  {
    this.LoginService.userAuth(this.email,this.password).subscribe(
      (res: any) => {
        this.LoginService.login(res.admin.access_token);
        this.userStorage.saveUserName(res.admin.name);
        console.log(res.admin.name);
        this.userStorage.saveUserId(res.admin.id);
        console.log(res.admin.id);
        this.router.navigateByUrl('/beauty/Dashboard');
      },
      err=>{console.log(err);
      }
    );
  }

}
