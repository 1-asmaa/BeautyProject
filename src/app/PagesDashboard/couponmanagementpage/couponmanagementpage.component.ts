import { HttpClient } from '@angular/common/http';
import { Component, OnInit , ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetalldataService } from 'src/app/Services/getalldata.service';
import { HeaderComponent } from 'src/app/Shared/header/header.component';
import { SideComponent } from 'src/app/Shared/side/side.component';
import { Coupon } from 'src/app/ViewModels/coupon';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddDataService } from 'src/app/Services/add-data.service';
import { Provider } from 'src/app/ViewModels/provider';
import { DeletedataService } from 'src/app/Services/deletedata.service';
import Swal from 'sweetalert2';
import { EditcouponComponent } from 'src/app/EditDashboard/editcoupon/editcoupon.component';
import { ViewCouponComponent } from 'src/app/ViewDetails/view-coupon/view-coupon.component';

@Component({
  selector: 'app-couponmanagementpage',
  templateUrl: './couponmanagementpage.component.html',
  styleUrls: ['./couponmanagementpage.component.css']
})
export class CouponmanagementpageComponent implements OnInit {
  @ViewChild(SideComponent) side: SideComponent;
  @ViewChild(HeaderComponent) head: HeaderComponent;
  couponList: any = [];
  coupon: Coupon[] = [];
  beautList: any = [];
  beaut: Provider[] = [];
  issueForm: FormGroup;
  customForm: FormGroup;
  private subscription: Subscription[] = [];
  closeResult: string;

  constructor( private allData: GetalldataService,private router: Router,private httpClient: HttpClient,
               private addService: AddDataService,private activeRoute: ActivatedRoute,
               private modalService: NgbModal,
               public fb: FormBuilder,private delService: DeletedataService) { }

  ngOnInit(): void {
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

    this.addCoupon();
    this.addCustomCoupon();
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  addCoupon() {
    this.issueForm = this.fb.group({
      code: ['', Validators.required],
      type: ['', Validators.required],
      value: ['', Validators.required],
      beautician_id: [''],
      valid_from: ['', Validators.required],
      valid_until: ['', Validators.required],
    });
  }
  onSubmit() {
    this.addService.addCoupon(this.issueForm.value).subscribe(res => {
      console.log('Issue added!');
      console.log(this.issueForm.value);
      this.ngOnInit();
      // this.ngZone.run(() => this.router.navigateByUrl('/school/'));
    });
    this.modalService.dismissAll(); //dismiss the modal
  }

  addCustomCoupon() {
    this.customForm = this.fb.group({
      code: ['', Validators.required],
      type: [Validators.required],
      value: ['', Validators.required],
      beautician_id: ['',Validators.required],
      valid_from: ['', Validators.required],
      valid_until: ['', Validators.required],
    });
  }
  onSubmiit() {
    this.addService.addCoupon(this.customForm.value).subscribe(res => {
      console.log('Issue added!');
      this.ngOnInit();
      // this.ngZone.run(() => this.router.navigateByUrl('/school/'));
    });
    this.modalService.dismissAll(); //dismiss the modal
  }

  DeleteCoupon(id: number) {
    this.delService.deleteCoupon(id).subscribe(

      res => {
        this.ngOnInit();
        Swal.fire({
          text:   "Admin has been deleted successfully.",
          icon: 'success'
        });
      },
      err => { console.log(err); }
    );
  }
  editItem(userModel: Coupon) {
    const ref = this.modalService.open(EditcouponComponent, { centered: true });
    ref.componentInstance.selectedcoupon = userModel;

    ref.result.then((yes) => {
      console.log('Yes Click');
      this.ngOnInit();
    },
      (cancel) => {
        console.log('Cancel Click');

      })
  }

  viewCoupon(userModel: Coupon) {
    const ref = this.modalService.open(ViewCouponComponent, { centered: true });
    ref.componentInstance.oneCoupon = userModel;
  
    ref.result.then((yes) => {
      console.log('Yes Click');
      this.ngOnInit();
    },
      (cancel) => {
        console.log('Cancel Click');
  
      })
  }
}
