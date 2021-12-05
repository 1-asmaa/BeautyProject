import { HttpClient } from '@angular/common/http';
import { Component, OnInit , ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal , ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { EditServiceComponent } from 'src/app/EditDashboard/edit-service/edit-service.component';
import { AddDataService } from 'src/app/Services/add-data.service';
import { DeletedataService } from 'src/app/Services/deletedata.service';
import { GetalldataService } from 'src/app/Services/getalldata.service';
import { HeaderComponent } from 'src/app/Shared/header/header.component';
import { SideComponent } from 'src/app/Shared/side/side.component';
import { Category } from 'src/app/ViewModels/category';
import { Provider } from 'src/app/ViewModels/provider';
import { Sevice } from 'src/app/ViewModels/sevice';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-services-managementpage',
  templateUrl: './services-managementpage.component.html',
  styleUrls: ['./services-managementpage.component.css']
})
export class ServicesManagementpageComponent implements OnInit {
  @ViewChild(SideComponent) side: SideComponent;
  @ViewChild(HeaderComponent) head: HeaderComponent;
  servList: any = [];
  service: Sevice[] = [];
  servbeautList: any = [];
  servicebeaut: Sevice[] = [];
  provList: any = [];
  provider: Provider[] = [];
  private subscription: Subscription[] = [];
  beautician_id:number;
  catForm: FormGroup;
  selectedFile: File;
  closeResult: string;
  errorMsg: string;
  categList: any = [];
  category: Category[] = [];
  readonly cat = 'https://beauty.wothoq.co/api/admins/services/store';
  constructor(private allData: GetalldataService, private httpClient: HttpClient,
              private addService: AddDataService, private delService: DeletedataService,
               private activeRoute: ActivatedRoute,
              private modalService: NgbModal, public fb: FormBuilder) { }


  ngOnInit(): void {
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

    this.subscription.push(this.allData.getAllBeautService(this.beautician_id).subscribe(
      (response: any) => {
        this.servicebeaut = response;
        this.servbeautList = response.services;
        console.log(this.service);
      },
      (err) => {
        console.log(err);
      }
    ));
  
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
    this.subscription.push(this.allData.getAllcategory().subscribe(
    (response: any) => {
      this.category = response;
      this.categList = response.categories;
      console.log(this.category);
    },
    (err) => {
      console.log(err);
    }
  ));
    this.addCate();
}

open(content) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
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
addCate() {
this.catForm = this.fb.group({
     name_ar: ['', Validators.required],
     name_en: ['', Validators.required],
     details_ar: ['', Validators.required],
     details_en: ['', Validators.required],
     service_icon: ['', Validators.required],
     category_id: ['', Validators.required],
     price: ['', Validators.required],
     estimated_time: ['', Validators.required],
     location: ['', Validators.required],
     beautician_id: ['', Validators.required],
   });
 }


  onSubmit() {
    const uploadData = new FormData();
    uploadData.append('service_icon', this.catForm.get('service_icon').value);
    uploadData.append('name_ar', this.catForm.get('name_ar').value);
    uploadData.append('name_en', this.catForm.get('name_en').value);
    uploadData.append('details_ar', this.catForm.get('details_ar').value);
    uploadData.append('details_en', this.catForm.get('details_en').value);
    uploadData.append('category_id', this.catForm.get('category_id').value);
    uploadData.append('price', this.catForm.get('price').value);
    uploadData.append('estimated_time', this.catForm.get('estimated_time').value);
    uploadData.append('location', this.catForm.get('location').value);
    uploadData.append('beautician_id', this.catForm.get('beautician_id').value);
    this.httpClient.post(this.cat, uploadData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event); // handle event here
        this.ngOnInit();
      });
    this.modalService.dismissAll(); //dismiss the modal
 }

 onFileChanged(event){
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      this.catForm.get('service_icon').setValue(event.target.files[0]);
    };
    reader.readAsDataURL(event.target.files[0]);
  }

 }
DeleteService(id: number) {
  this.delService.deleteServices(id).subscribe(
    res => {
      this.ngOnInit();
      Swal.fire({
        text:   'Admin has been deleted successfully.',
        icon: 'success'
      });
    },
    err => { console.log(err.message); }
  );
}
editItem(userModel: Sevice) {
  const ref = this.modalService.open(EditServiceComponent, { centered: true });
  ref.componentInstance.selectedcity = userModel;

  ref.result.then((yes) => {
    console.log('Yes Click');
    this.ngOnInit();
  },
    (cancel) => {
      console.log('Cancel Click');

    })
}
}
