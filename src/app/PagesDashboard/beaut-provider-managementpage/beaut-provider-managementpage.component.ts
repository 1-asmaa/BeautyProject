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

@Component({
  selector: 'app-beaut-provider-managementpage',
  templateUrl: './beaut-provider-managementpage.component.html',
  styleUrls: ['./beaut-provider-managementpage.component.css']
})
export class BeautProviderManagementpageComponent implements OnInit {
  @ViewChild(SideComponent) side: SideComponent;
  @ViewChild(HeaderComponent) head: HeaderComponent;
  provList: any = [];
  provider: Provider[] = [];
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
  }

}
