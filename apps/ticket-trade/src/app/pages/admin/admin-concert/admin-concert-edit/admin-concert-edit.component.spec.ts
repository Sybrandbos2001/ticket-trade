import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConcertEditComponent } from './admin-concert-edit.component';

describe('AdminConcertEditComponent', () => {
  let component: AdminConcertEditComponent;
  let fixture: ComponentFixture<AdminConcertEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConcertEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConcertEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
