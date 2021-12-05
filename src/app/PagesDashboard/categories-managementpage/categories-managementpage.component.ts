import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalDismissReasons, NgbDateParserFormatter, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GetalldataService } from 'src/app/Services/getalldata.service';
import { HeaderComponent } from 'src/app/Shared/header/header.component';
import { SideComponent } from 'src/app/Shared/side/side.component';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddDataService } from 'src/app/Services/add-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DeletedataService } from 'src/app/Services/deletedata.service';
import Swal from 'sweetalert2';
import { EditCityComponent } from 'src/app/EditDashboard/edit-city/edit-city.component';
import { Category } from 'src/app/ViewModels/category';
import { EditcategoryComponent } from 'src/app/EditDashboard/editcategory/editcategory.component';

@Component({
  selector: 'app-categories-managementpage',
  templateUrl: './categories-managementpage.component.html',
  styleUrls: ['./categories-managementpage.component.css']
})
export class CategoriesManagementpageComponent implements OnInit {
  @ViewChild(SideComponent) side: SideComponent;
  @ViewChild(HeaderComponent) head: HeaderComponent;
  categList: any = [];
  category: Category[] = [];
  closeResult: string;
  catForm: FormGroup;
  private subscription: Subscription[] = [];
  imageSrc: string;
  selectedFile: File;
  readonly cat = 'https://beauty.wothoq.co/api/admins/categories/store';
  constructor(private allData: GetalldataService, private router: Router, private httpClient: HttpClient,
              private addService: AddDataService, private delService: DeletedataService, private activeRoute: ActivatedRoute,
              private modalService: NgbModal, public fb: FormBuilder) { }


  ngOnInit(): void {
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
      category_icon: [''],
     });
   }


    onSubmit() {
      const uploadData = new FormData();
      uploadData.append('category_icon', this.catForm.get('category_icon').value);
      uploadData.append('name_ar', this.catForm.get('name_ar').value);
      uploadData.append('name_en', this.catForm.get('name_en').value);
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
        this.catForm.get('category_icon').setValue(event.target.files[0]);
      };
      reader.readAsDataURL(event.target.files[0]);
    }

   }
  DeleteCate(id: number) {
    this.delService.deleteCategories(id).subscribe(
      res => {
        this.ngOnInit();
        Swal.fire({
          text: 'Admin has been deleted successfully.',
          icon: 'success'
        });

      },
      err => { console.log(err); }
    );
  }
  editItem(userModel: Category) {
    const ref = this.modalService.open(EditcategoryComponent, { centered: true });
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
