import { Component, OnInit } from '@angular/core';
import { LocationService } from '@ticket-trade/shared/services';
import { Location } from '@ticket-trade/shared/domains';
import Swal from 'sweetalert2';

@Component({
  selector: 'ticket-trade-admin-location-list',
  templateUrl: './admin-location-list.component.html',
  styleUrls: ['./admin-location-list.component.css']
})
export class AdminLocationListComponent implements OnInit {
  locations: Location[] = [];
  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(): void {
    this.locations = this.locationService.getLocations();
  }

  removeLocation(location: Location): void {

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
        this.locationService.removeLocation(location.id);
        Swal.fire(
          'Verwijderd!',
          'Locatie is succesvol verwijderd.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Geannuleerd',
          'De locatie is niet verwijderd.',
          'error'
        )
      }
    })
  }

}
