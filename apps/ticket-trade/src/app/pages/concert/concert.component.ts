import { Component, OnInit } from '@angular/core';
import { ConcertService } from '@ticket-trade/shared/services';

@Component({
  selector: 'ticket-trade-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  constructor(private concertService: ConcertService) { }

  ngOnInit(): void {
    
  }
}
