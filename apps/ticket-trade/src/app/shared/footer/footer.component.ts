import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ticket-trade-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public footerYear: number;
  constructor() {
    this.footerYear = new Date().getFullYear();
  }

  ngOnInit(): void {}
}
