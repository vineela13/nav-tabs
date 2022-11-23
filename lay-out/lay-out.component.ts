import { Component, OnInit } from '@angular/core';
import {
  MsalGuard,
} from '@azure/msal-angular';

@Component({
  selector: 'app-lay-out',
  templateUrl: './lay-out.component.html',
  styleUrls: ['./lay-out.component.scss']
})
export class LayOutComponent implements OnInit {
  routerLinkVariable ="/onderdelen"
  constructor() { }

  ngOnInit(): void {
  }

}
