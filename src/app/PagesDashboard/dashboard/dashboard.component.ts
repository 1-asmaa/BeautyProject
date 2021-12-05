import { Component, OnInit ,ViewChild} from '@angular/core';
import { GetalldataService } from 'src/app/Services/getalldata.service';
import { HeaderComponent } from 'src/app/Shared/header/header.component';
import { SideComponent } from 'src/app/Shared/side/side.component';
import { Home } from 'src/app/ViewModels/home';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(SideComponent) side: SideComponent;
  @ViewChild(HeaderComponent) head: HeaderComponent;

   home: Home;

  constructor(private allData: GetalldataService) {}

  ngOnInit(): void {
    this.allData.dashboardData().subscribe(
      (res:any) => {

      this.home = res.data;
      console.log(this.home);
      },
      err => console.log(err)
    );
  }

}
