import { Route } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { ConcertComponent } from './pages/concert/concert.component';
import { ConcertDetailComponent } from './pages/concert/concert-detail/concert-detail.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminConcertComponent } from './pages/admin/admin-concert/admin-concert.component';
import { AdminConcertCreateComponent } from './pages/admin/admin-concert/admin-concert-create/admin-concert-create.component';
import { AdminConcertEditComponent } from './pages/admin/admin-concert/admin-concert-edit/admin-concert-edit.component';
import { AdminConcertDetailComponent } from './pages/admin/admin-concert/admin-concert-detail/admin-concert-detail.component';
import { AdminLocationComponent } from './pages/admin/admin-location/admin-location.component';
import { AdminLocationCreateComponent } from './pages/admin/admin-location/admin-location-create/admin-location-create.component';
import { AdminLocationEditComponent } from './pages/admin/admin-location/admin-location-edit/admin-location-edit.component';
import { AdminLocationDetailComponent } from './pages/admin/admin-location/admin-location-detail/admin-location-detail.component';

export const appRoutes: Route[] = [
  { path: '', component: LandingComponent },
  {
    path: 'concerten',
    component: ConcertComponent,
    children: [
      {
        path: ':id',
        component: ConcertDetailComponent,
      },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/concerten', component: AdminConcertComponent,
    children: [
      {
        path: 'toevoegen',
        component: AdminConcertCreateComponent,
      },
      {
        path: ':id/aanpassen',
        component: AdminConcertEditComponent,
      },
      {
        path: ':id',
        component: AdminConcertDetailComponent,
      },
    ], 
  },
  { path: 'admin/locaties', component: AdminLocationComponent,
    children: [
      {
        path: 'toevoegen',
        component: AdminLocationCreateComponent,
      },
      {
        path: ':id/aanpassen',
        component: AdminLocationEditComponent,
      },
      {
        path: ':id',
        component: AdminLocationDetailComponent,
      },
    ], 
  },
];
