import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onderdelen',
  templateUrl: './onderdelen.component.html',
  styleUrls: ['./onderdelen.component.scss']
})
export class OnderdelenComponent implements OnInit {
  routeToPrivacy ="/privacy"
  constructor() { }

  ngOnInit(): void {
  }

}
