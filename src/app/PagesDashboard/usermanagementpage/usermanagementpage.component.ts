import { Component, OnInit , ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddDataService } from 'src/app/Services/add-data.service';
import { GetalldataService } from 'src/app/Services/getalldata.service';
import { HeaderComponent } from 'src/app/Shared/header/header.component';
import { SideComponent } from 'src/app/Shared/side/side.component';
import { User } from 'src/app/ViewModels/user';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeletedataService } from 'src/app/Services/deletedata.service';
import Swal from 'sweetalert2';
import { EditUserComponent } from 'src/app/EditDashboard/edit-user/edit-user.component';
import { EdituserStatusComponent } from 'src/app/EditDashboard/edituser-status/edituser-status.component';


@Component({
  selector: 'app-usermanagementpage',
  templateUrl: './usermanagementpage.component.html',
  styleUrls: ['./usermanagementpage.component.css']
})
export class UsermanagementpageComponent implements OnInit {
  @ViewChild(SideComponent) side: SideComponent;
  @ViewChild(HeaderComponent) head: HeaderComponent;
  userList: any = [];
  user: User[] = [];
  cusForm: FormGroup;
  closeResult: string;

  private subscription: Subscription[] = [];
  constructor(private allData: GetalldataService,private addService: AddDataService,
              private activeRoute: ActivatedRoute,private modalService: NgbModal,
              public fb: FormBuilder,private delService:DeletedataService) { }

  ngOnInit(): void {
    this.subscription.push(this.allData.getAlluser().subscribe(
      (response: any) => {
        this.user = response;
        this.userList = response.users;
        console.log(this.user);
      },
      (err) => {
        console.log(err);
      }
    ));
    this.addUser();
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


  addUser() {
    this.cusForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      longitude: ['', Validators.required],
      latitude: ['', Validators.required],
    });
  }
  onSubmit() {
    this.addService.addcustomer(this.cusForm.value).subscribe(res => {
      console.log('Issue added!');
      this.ngOnInit();
    });
    this.modalService.dismissAll(); //dismiss the modal
  }
  DeleteUser(id: number) {
    this.delService.deleteUser(id).subscribe(

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
  editItem(userModel: User) {
    const ref = this.modalService.open(EditUserComponent, { centered: true });
    ref.componentInstance.selectedUser = userModel;

    ref.result.then((yes) => {
      console.log('Yes Click');
      this.ngOnInit();
    },
      (cancel) => {
        console.log('Cancel Click');

      })
  }
  editItem1(userModel: User) {
    const ref = this.modalService.open(EdituserStatusComponent, { centered: true });
    ref.componentInstance.selectedUser = userModel;

    ref.result.then((yes) => {
      console.log('Yes Click');
      this.ngOnInit();
    },
      (cancel) => {
        console.log('Cancel Click');

      })
  }
}
