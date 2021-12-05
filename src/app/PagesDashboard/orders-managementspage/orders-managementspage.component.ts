import { HttpClient } from '@angular/common/http';
import { Component, OnInit , ViewChild} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { EditOrderStatusComponent } from 'src/app/EditDashboard/edit-order-status/edit-order-status.component';
import { AddDataService } from 'src/app/Services/add-data.service';
import { DeletedataService } from 'src/app/Services/deletedata.service';
import { GetalldataService } from 'src/app/Services/getalldata.service';
import { HeaderComponent } from 'src/app/Shared/header/header.component';
import { SideComponent } from 'src/app/Shared/side/side.component';
import { ViewOrderComponent } from 'src/app/ViewDetails/view-order/view-order.component';
import { Coupon } from 'src/app/ViewModels/coupon';
import { Orders } from 'src/app/ViewModels/orders';
import { Provider } from 'src/app/ViewModels/provider';
import { Sevice } from 'src/app/ViewModels/sevice';
import Swal from 'sweetalert2';
declare var $:any;
@Component({
  selector: 'app-orders-managementspage',
  templateUrl: './orders-managementspage.component.html',
  styleUrls: ['./orders-managementspage.component.css']
})
export class OrdersManagementspageComponent implements OnInit {
  @ViewChild(SideComponent) side: SideComponent;
  @ViewChild(HeaderComponent) head: HeaderComponent;
  orderList;
  order: Orders[] = [];
  beautList: any = [];
  beaut: Provider[] = [];
  servList: any = [];
  service: Sevice[] = [];
  couponList: any = [];
  coupon: Coupon[] = [];
  closeResult: string;
  issueForm:FormGroup;
  private subscription: Subscription[] = [];
  constructor(private allData: GetalldataService,private router: Router,private httpClient: HttpClient,
              private addService: AddDataService,private delService: DeletedataService,
              private activeRoute: ActivatedRoute,private modalService: NgbModal,public fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.subscription.push(this.allData.getAllorder().subscribe(
      (response: any) => {
        this.order = response;
        this.orderList = response.orders;
        console.log(this.order);
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
    this.subscription.push(this.allData.getAllservice().subscribe(
      (response: any) => {
        this.service = response;
        this.servList = response.services;
        console.log(this.service);
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
    this.addOrder();
    this.addservices();
      this.addperson_num();
      
  }
  DeleteOrder(id: number) {
    this.delService.deleteOrder(id).subscribe(
    
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
  editItem1(userModel: Orders) {
    const ref = this.modalService.open(EditOrderStatusComponent, { centered: true });
    ref.componentInstance.selectedOrder = userModel;

    ref.result.then((yes) => {
      console.log('Yes Click');
      this.ngOnInit();
    },
      (cancel) => {
        console.log('Cancel Click');

      })
  }
  viewCoupon(userModel: Orders) {
    const ref = this.modalService.open(ViewOrderComponent, { centered: true });
    ref.componentInstance.oneCoupon = userModel;
  
    ref.result.then((yes) => {
      console.log('Yes Click');
      this.ngOnInit();
    },
      (cancel) => {
        console.log('Cancel Click');
  
      })
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
  addOrder() {
    this.issueForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      location_type: ['', Validators.required],
      beautician_id: ['', Validators.required],
      payment_method:['', Validators.required],
      services: this.fb.array([]),
      person_num: this.fb.array([]),
      coupon: ['', Validators.required],

    });
  }
  get servicesArray(): FormArray {
    return this.issueForm.get('services') as FormArray
  }
  get person_num(): FormArray {
    return this.issueForm.get('person_num') as FormArray
  }
  newservices(): FormGroup {
    return this.fb.group({
      id: ['', Validators.maxLength(10)],
    });
  }
  newperson_num(): FormGroup {
    return this.fb.group({
      id:['',Validators.maxLength(10)],
    });
  }
  addservices() {
    this.servicesArray.push(this.newservices());
   }
   addperson_num() {
    this.person_num.push(this.newperson_num());
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
}
