import { Component, OnInit } from '@angular/core';
import { GetalldataService } from 'src/app/Services/getalldata.service';
import { Orders } from 'src/app/ViewModels/orders';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  //oneCoupon: Orders;
  oneCoupon: Orders=new Orders();
  public PID: number;
  constructor(private allData: GetalldataService) { }

  ngOnInit(): void {
  }
  private getonecoupon(prdid: number) {
    this.allData.getorderById(this.PID).subscribe(
      (res: any) => {
      this.oneCoupon = res.order;
      console.log(this.oneCoupon);
      },
      err => console.log(err)
    );
  }
 
}
