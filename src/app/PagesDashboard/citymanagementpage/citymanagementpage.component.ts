import { Component, OnInit , ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GetalldataService } from 'src/app/Services/getalldata.service';
import { HeaderComponent } from 'src/app/Shared/header/header.component';
import { SideComponent } from 'src/app/Shared/side/side.component';
import { Cities } from 'src/app/ViewModels/cities';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddDataService } from 'src/app/Services/add-data.service';
import { HttpClient } from '@angular/common/http';
import { DeletedataService } from 'src/app/Services/deletedata.service';
import Swal from 'sweetalert2';
import { EditCityComponent } from 'src/app/EditDashboard/edit-city/edit-city.component';
import { ViewCityComponent } from 'src/app/ViewDetails/view-city/view-city.component';


@Component({
  selector: 'app-citymanagementpage',
  templateUrl: './citymanagementpage.component.html',
  styleUrls: ['./citymanagementpage.component.css']
})
export class CitymanagementpageComponent implements OnInit {
  @ViewChild(SideComponent) side: SideComponent;
  @ViewChild(HeaderComponent) head: HeaderComponent;
  citiesList: any = [];
  city: Cities[] = [];
  closeResult: string;
  issueForm: FormGroup;
  private subscription: Subscription[] = [];
  constructor(private allData: GetalldataService,private router: Router,private httpClient: HttpClient,
              private addService: AddDataService,private delService: DeletedataService,private activeRoute: ActivatedRoute,
              private modalService: NgbModal,public fb: FormBuilder) { }

  ngOnInit(): void {
    this.subscription.push(this.allData.getAllcities().subscribe(
      (response: any) => {
        this.city = response;
        this.citiesList = response.cities;
        console.log(this.city);
      },
      (err) => {
        console.log(err);
      }
    ));
    this.addCities();
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'md' }).result.then((result) => {
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


  addCities() {
    this.issueForm = this.fb.group({
      name_ar: ['', Validators.required],
      country_ar: ['', Validators.required],
      name_en: ['', Validators.required],
      country_en: ['', Validators.required],
    });
  }
  onSubmit() {
    this.addService.addCity(this.issueForm.value).subscribe(res => {
      console.log('Issue added!');
      this.ngOnInit();
    });
    this.modalService.dismissAll(); //dismiss the modal
  }



  DeleteCity(id: number) {
    this.delService.deleteCity(id).subscribe(
    
      res => {
        this.allData.getAllcities().subscribe(
          (response:any) => {
            this.city = response;
            this.citiesList = response.cities;
            console.log(this.city);
          },
          (err) => {
            console.log(err);
          }
        );
        Swal.fire({
          text:   "Admin has been deleted successfully.",
          icon: 'success'
        });
      },
      err => { console.log(err); }
    );
  }

  editItem(userModel: Cities) {
    const ref = this.modalService.open(EditCityComponent, { centered: true });
    ref.componentInstance.selectedcity = userModel;

    ref.result.then((yes) => {
      console.log('Yes Click');
      this.ngOnInit();
    },
      (cancel) => {
        console.log('Cancel Click');

      })
  }
  viewCity(userModel: Cities) {
    const ref = this.modalService.open(ViewCityComponent, { centered: true });
    ref.componentInstance.oneCity = userModel;
  
    ref.result.then((yes) => {
      console.log('Yes Click');
      this.ngOnInit();
    },
      (cancel) => {
        console.log('Cancel Click');
  
      })
  }
}
