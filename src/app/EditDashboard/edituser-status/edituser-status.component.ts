import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditdataService } from 'src/app/Services/editdata.service';
import { User } from 'src/app/ViewModels/user';

@Component({
  selector: 'app-edituser-status',
  templateUrl: './edituser-status.component.html',
  styleUrls: ['./edituser-status.component.css']
})
export class EdituserStatusComponent implements OnInit {
  selectedUser: User;
  editForm: FormGroup;
  isLoading = false;
  constructor(public modal: NgbActiveModal, private route: ActivatedRoute,
    private usersService: EditdataService,
    private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.setForm();
  }
  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.usersService.updateUser(this.editForm.value).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');

    },
      error => {
        this.isLoading = false;
      });
  }
  get editFormData() { return this.editForm.controls; }
  private setForm() {
    console.log(this.selectedUser);
    this.editForm = this.formBuilder.group({
      user_id: [this.selectedUser.id, Validators.required],
      block: [this.selectedUser.block, Validators.required],
    });

  }
}
