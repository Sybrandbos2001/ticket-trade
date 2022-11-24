import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLocationEditComponent } from './admin-location-edit.component';

describe('AdminLocationEditComponent', () => {
  let component: AdminLocationEditComponent;
  let fixture: ComponentFixture<AdminLocationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLocationEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLocationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
