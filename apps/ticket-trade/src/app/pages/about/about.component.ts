import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ticket-trade-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  title = 'angular-img-hover';
  myThumbnail = 'assets/img/Thumb-ERD.png';
  myFullresImage = 'assets/img/Full-sizeERD.png';
  constructor() {}

  ngOnInit(): void {}
}
