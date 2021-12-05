import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from 'src/app/Shared/header/header.component';
import { SideComponent } from 'src/app/Shared/side/side.component';

@Component({
  selector: 'app-providercalendar',
  templateUrl: './providercalendar.component.html',
  styleUrls: ['./providercalendar.component.css']
})
export class ProvidercalendarComponent implements OnInit {
  @ViewChild(SideComponent) side: SideComponent;
  @ViewChild(HeaderComponent) head: HeaderComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
