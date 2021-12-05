import { Component, OnInit } from '@angular/core';
import { GetalldataService } from 'src/app/Services/getalldata.service';
import { Cities } from 'src/app/ViewModels/cities';

@Component({
  selector: 'app-view-city',
  templateUrl: './view-city.component.html',
  styleUrls: ['./view-city.component.css']
})
export class ViewCityComponent implements OnInit {
  oneCity: Cities;
  public PID: number;
  constructor(private allData:GetalldataService) { }

  ngOnInit(): void {
  }
  private getonecoupon(prdid: number) {
    this.allData.getcouponById(this.PID).subscribe(
      (res: any) => {
      this.oneCity = res.city;
      console.log(this.oneCity);
      },
      err => console.log(err)
    );
  }
}
