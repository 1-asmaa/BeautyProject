import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditdataService } from 'src/app/Services/editdata.service';
import { Sevice } from 'src/app/ViewModels/sevice';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  selectedcity: Sevice;
  catForm: FormGroup;
  isLoading = false;
  
  readonly cat = 'https://beauty.wothoq.co/api/admins/services/update?lang=en';
  constructor(public modal: NgbActiveModal, private route: ActivatedRoute,
    private usersService: EditdataService,private httpClient: HttpClient,
    private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.setForm();
  }
  onFileChanged(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.catForm.get('category_icon').setValue(event.target.files[0]);
      };
      reader.readAsDataURL(event.target.files[0]);
    }

  }
  onSubmit() {
    if (this.catForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    const uploadData = new FormData();
    uploadData.append('id', this.catForm.get('id').value);
    uploadData.append('category_icon', this.catForm.get('category_icon').value);
    uploadData.append('name_ar', this.catForm.get('name_ar').value);
    uploadData.append('name_en', this.catForm.get('name_en').value);
    this.httpClient.put(this.cat, uploadData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');

    },
      error => {
        this.isLoading = false;
      });
  }
  get catFormData() { return this.catForm.controls; }
  private setForm() {
    console.log(this.selectedcity);
    this.catForm = this.formBuilder.group({
      id: [this.selectedcity.id, Validators.required],
      name_en: [this.selectedcity.name_en, Validators.required],
      category_icon: [this.selectedcity.icon, Validators.required],
      estimated_time: [this.selectedcity.estimated_time, Validators.required],
      bonus: [this.selectedcity.bonus, Validators.required],
      price: [this.selectedcity.price, Validators.required],
      details_en: [this.selectedcity.details_en, Validators.required],
    });

  }
}
