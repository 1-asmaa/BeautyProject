import { Component, OnInit, ViewChild } from '@angular/core';
import { Provider } from 'src/app/ViewModels/provider';
import { Subscription } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GetalldataService } from 'src/app/Services/getalldata.service';
import { HeaderComponent } from 'src/app/Shared/header/header.component';
import { SideComponent } from 'src/app/Shared/side/side.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddDataService } from 'src/app/Services/add-data.service';
import { HttpClient } from '@angular/common/http';
import { DeletedataService } from 'src/app/Services/deletedata.service';
import Swal from 'sweetalert2';
import { ViewBeautComponent } from 'src/app/ViewDetails/view-beaut/view-beaut.component';
@Component({
  selector: 'app-beautprovider',
  templateUrl: './beautprovider.component.html',
  styleUrls: ['./beautprovider.component.css']
})
export class BeautproviderComponent implements OnInit {
  @ViewChild(SideComponent) side: SideComponent;
  @ViewChild(HeaderComponent) head: HeaderComponent;
  provList: any = [];
  provider: Provider[] = [];
  cityList: any = [];
  Cities: Provider[] = [];
  closeResult: string;
  issueForm: FormGroup;
  private subscription: Subscription[] = [];
  constructor(private allData: GetalldataService,private router: Router,private httpClient: HttpClient,
              private addService: AddDataService,private delService: DeletedataService, private activeRoute: ActivatedRoute,
              private modalService: NgbModal,public fb: FormBuilder) { }

  ngOnInit(): void {
    this.subscription.push(this.allData.getAllprovider().subscribe(
      (response: any) => {
        this.provider = response;
        this.provList = response.beauticians;
        console.log(this.provider);
      },
      (err) => {
        console.log(err);
      }
    ));

    this.subscription.push(this.allData.getAllcities().subscribe(
      (response: any) => {
        this.Cities = response;
        this.cityList = response.cities;
        console.log(this.provider);
      },
      (err) => {
        console.log(err);
      }
    ));
    this.addBeaut();
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
  addBeaut() {
    this.issueForm = this.fb.group({
      owner_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      longitude: ['', Validators.required],
      latitude: ['', Validators.required],
      photos: ['', Validators.required],
      city_id: ['', Validators.required],
      beaut_name: ['', Validators.required],
      insta_link: ['', Validators.required],
      photo: ['', Validators.required],
    });
  }
  onSubmit() {
    this.addService.addCity(this.issueForm.value).subscribe(res => {
      console.log('Issue added!');
      this.ngOnInit();
    });
    this.modalService.dismissAll(); //dismiss the modal
  }
  viewBeauty(userModel: Provider) {
    const ref = this.modalService.open(ViewBeautComponent, { centered: true });
    ref.componentInstance.oneBeauty = userModel;
  
    ref.result.then((yes) => {
      console.log('Yes Click');
      this.ngOnInit();
    },
      (cancel) => {
        console.log('Cancel Click');
  
      })
  }
}
