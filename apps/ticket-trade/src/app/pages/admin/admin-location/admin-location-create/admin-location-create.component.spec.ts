import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLocationCreateComponent } from './admin-location-create.component';

describe('AdminLocationCreateComponent', () => {
  let component: AdminLocationCreateComponent;
  let fixture: ComponentFixture<AdminLocationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLocationCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLocationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
