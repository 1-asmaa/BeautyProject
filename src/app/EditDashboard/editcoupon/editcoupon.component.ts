import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { EditdataService } from 'src/app/Services/editdata.service';
import { GetalldataService } from 'src/app/Services/getalldata.service';
import { Coupon } from 'src/app/ViewModels/coupon';
import { Provider } from 'src/app/ViewModels/provider';

@Component({
  selector: 'app-editcoupon',
  templateUrl: './editcoupon.component.html',
  styleUrls: ['./editcoupon.component.css']
})
export class EditcouponComponent implements OnInit {
  selectedcoupon: Coupon ;
  catForm: FormGroup;
  isLoading = false;
  beautList: any = [];
  beaut: Provider[] = [];
  couponList: any = [];
  coupon: Coupon[] = [];
  private subscription: Subscription[] = [];

  constructor(public modal: NgbActiveModal, private route: ActivatedRoute,
              private usersService: EditdataService,private allData: GetalldataService,
              private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.subscription.push(this.allData.getAllprovider().subscribe(
      (response: any) => {
        this.beaut = response;
        this.beautList = response.beauticians;
        console.log(this.beaut);
      },
      (err) => {
        console.log(err);
      }
    ));
    this.subscription.push(this.allData.getAllcoupon().subscribe(
      (response: any) => {
        this.coupon = response;
        this.couponList = response.coupons;
        console.log(this.coupon);
      },
      (err) => {
        console.log(err);
      }
    ));
    this.setForm();
  }
  // beauticianChange(e){
  //   console.log(e.target.value)
  //  }

   
  onSubmit() {
    if (this.catForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.usersService.updateCoupon(this.catForm.value).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');

    },
      error => {
        this.isLoading = false;
      });
  }
  get catFormData() { return this.catForm.controls; }
  private setForm() {
    console.log(JSON.stringify(this.selectedcoupon));
    this.catForm = this.formBuilder.group({
      coupon_id: [this.selectedcoupon.id, Validators.required],
      code: [this.selectedcoupon.code, Validators.required],
      value: [this.selectedcoupon.value, Validators.required],
      type: [this.selectedcoupon.type, Validators.required],
      beautician_id: [this.selectedcoupon.beautician[0].beautician_id, Validators.required],
      valid_from: [this.selectedcoupon.valid_from , Validators.required],
      valid_until: [this.selectedcoupon.valid_until, Validators.required],

    });

  }

}
