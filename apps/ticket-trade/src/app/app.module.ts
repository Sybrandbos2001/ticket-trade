import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ConcertListComponent } from './pages/concert/concert-list/concert-list.component';
import { ConcertDetailComponent } from './pages/concert/concert-detail/concert-detail.component';
import { ConcertComponent } from './pages/concert/concert.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminConcertComponent } from './pages/admin/admin-concert/admin-concert.component';
import { AdminLocationComponent } from './pages/admin/admin-location/admin-location.component';
import { AdminConcertListComponent } from './pages/admin/admin-concert/admin-concert-list/admin-concert-list.component';
import { AdminConcertCreateComponent } from './pages/admin/admin-concert/admin-concert-create/admin-concert-create.component';
import { AdminConcertEditComponent } from './pages/admin/admin-concert/admin-concert-edit/admin-concert-edit.component';
import { AdminConcertDetailComponent } from './pages/admin/admin-concert/admin-concert-detail/admin-concert-detail.component';
import { AdminLocationListComponent } from './pages/admin/admin-location/admin-location-list/admin-location-list.component';
import { AdminLocationDetailComponent } from './pages/admin/admin-location/admin-location-detail/admin-location-detail.component';
import { AdminLocationEditComponent } from './pages/admin/admin-location/admin-location-edit/admin-location-edit.component';
import { AdminLocationCreateComponent } from './pages/admin/admin-location/admin-location-create/admin-location-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    LandingComponent,
    ConcertListComponent,
    ConcertDetailComponent,
    ConcertComponent,
    AboutComponent,
    AdminComponent,
    AdminConcertComponent,
    AdminLocationComponent,
    AdminConcertListComponent,
    AdminConcertCreateComponent,
    AdminConcertEditComponent,
    AdminConcertDetailComponent,
    AdminLocationListComponent,
    AdminLocationDetailComponent,
    AdminLocationEditComponent,
    AdminLocationCreateComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    NgbModule,
    FormsModule,
    NgxImageZoomModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
