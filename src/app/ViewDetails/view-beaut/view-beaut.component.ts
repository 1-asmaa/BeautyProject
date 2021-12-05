import { Provider } from 'src/app/ViewModels/provider';
import { Component, OnInit } from '@angular/core';
import { GetalldataService } from 'src/app/Services/getalldata.service';

@Component({
  selector: 'app-view-beaut',
  templateUrl: './view-beaut.component.html',
  styleUrls: ['./view-beaut.component.css']
})
export class ViewBeautComponent implements OnInit {
  oneBeauty: Provider;
  public PID: number;
  constructor(private allData:GetalldataService) { }

  ngOnInit(): void {
  }
  private getonecoupon(prdid: number) {
    this.allData.getproviderById(this.PID).subscribe(
      (res: any) => {
      this.oneBeauty = res.Beautician;
      console.log(this.oneBeauty);
      },
      err => console.log(err)
    );
  }

}
