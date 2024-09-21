import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationfinderComponent } from './locationfinder.component';

describe('LocationfinderComponent', () => {
  let component: LocationfinderComponent;
  let fixture: ComponentFixture<LocationfinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationfinderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
