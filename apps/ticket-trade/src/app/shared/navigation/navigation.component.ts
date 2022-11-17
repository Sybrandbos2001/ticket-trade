import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ticket-trade-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  public isMenuCollapsed = true;
  constructor() {}

  ngOnInit(): void {}
}
