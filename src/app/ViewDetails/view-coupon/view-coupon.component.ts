import { Component, OnInit } from '@angular/core';
import { GetalldataService } from 'src/app/Services/getalldata.service';
import { Coupon } from 'src/app/ViewModels/coupon';

@Component({
  selector: 'app-view-coupon',
  templateUrl: './view-coupon.component.html',
  styleUrls: ['./view-coupon.component.css']
})
export class ViewCouponComponent implements OnInit {
  oneCoupon: Coupon;
  public PID: number;
  constructor(private allData: GetalldataService) { }

  ngOnInit(): void {
  }
  private getonecoupon(prdid: number) {
    this.allData.getcouponById(this.PID).subscribe(
      (res: any) => {
      this.oneCoupon = res.coupon;
      console.log(this.oneCoupon);
      },
      err => console.log(err)
    );
  }
 
}
