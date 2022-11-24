import { Component, OnInit } from '@angular/core';
import { ConcertService } from '@ticket-trade/shared/services';
import { Concert } from '@ticket-trade/shared/domains';
import Swal from 'sweetalert2';

@Component({
  selector: 'ticket-trade-admin-concert-list',
  templateUrl: './admin-concert-list.component.html',
  styleUrls: ['./admin-concert-list.component.css']
})
export class AdminConcertListComponent implements OnInit {
  concerts: Concert[] = [];

  constructor(private concertService: ConcertService) { }

  ngOnInit(): void {
    this.getConcerts();
  }

  getConcerts(): void {
    this.concerts = this.concertService.getConcerts();
  }

  removeConcert(concert: Concert): void {

    Swal.fire({
      title: 'Weet je het zeker?',
      text: "Je kunt dit niet terugdraaien!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ja, verwijderen!',
      cancelButtonText: 'Nee, annuleren!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.concertService.removeConcert(concert.id);
        Swal.fire(
          'Verwijderd!',
          'Concert is succesvol verwijderd.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Geannuleerd',
          'Het concert is niet verwijderd.',
          'error'
        )
      }
    })
  }

}
