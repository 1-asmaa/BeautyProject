import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditdataService } from 'src/app/Services/editdata.service';
import { Orders } from 'src/app/ViewModels/orders';
import { User } from 'src/app/ViewModels/user';

@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {
  selectedOrder: Orders;
  editForm: FormGroup;
  isLoading = false;
  constructor(public modal: NgbActiveModal, private route: ActivatedRoute,
              private usersService: EditdataService,
              private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {this.setForm();
  }
  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.usersService.updateOrder(this.editForm.value).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');

    },
      error => {
        this.isLoading = false;
      });
  }
  get editFormData() { return this.editForm.controls; }
  private setForm() {
    console.log(this.selectedOrder);
    this.editForm = this.formBuilder.group({
      order_id: [this.selectedOrder.id, Validators.required],
      order_status: [this.selectedOrder.order_status, Validators.required],
      services: [this.selectedOrder.services, Validators.required],
      person_num: [this.selectedOrder.user_id, Validators.required],
     // coupon: [this.selectedOrder., Validators.required],

    });

  }
}
