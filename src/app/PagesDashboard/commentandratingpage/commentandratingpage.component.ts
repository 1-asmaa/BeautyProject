import { Component, OnInit , ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { GetalldataService } from 'src/app/Services/getalldata.service';
import { HeaderComponent } from 'src/app/Shared/header/header.component';
import { SideComponent } from 'src/app/Shared/side/side.component';
import { Comment } from 'src/app/ViewModels/comment';

@Component({
  selector: 'app-commentandratingpage',
  templateUrl: './commentandratingpage.component.html',
  styleUrls: ['./commentandratingpage.component.css']
})
export class CommentandratingpageComponent implements OnInit {
  @ViewChild(SideComponent) side: SideComponent;
  @ViewChild(HeaderComponent) head: HeaderComponent;
  commentList: any = [];
  comment: Comment[] = [];
  private subscription: Subscription[] = [];
  constructor(private allData: GetalldataService) { }

  ngOnInit(): void {
    this.subscription.push(this.allData.getAllcomment().subscribe(
      (response: any) => {
        this.comment = response;
        this.commentList = response.BeauticianRate;
        console.log(this.comment);
      },
      (err) => {
        console.log(err);
      }
    ));
  }

}
