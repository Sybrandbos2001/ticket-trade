import { Route } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ConcertComponent } from './pages/concert/concert.component';
import { ConcertDetailComponent } from './pages/concert/concert-detail/concert-detail.component';
import { ConcertCreateComponent } from './pages/concert/concert-create/concert-create.component';


export const appRoutes: Route[] = [
  { path: '', component: LandingComponent },
  { path: 'concerten', component: ConcertComponent,
    children: [
      {
        path: 'toevoegen',
        component: ConcertCreateComponent,
      },
      {
        path: ':id',
        component: ConcertDetailComponent,
      },
    ], 
  },
];
