import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLocationDetailComponent } from './admin-location-detail.component';

describe('AdminLocationDetailComponent', () => {
  let component: AdminLocationDetailComponent;
  let fixture: ComponentFixture<AdminLocationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLocationDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLocationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
