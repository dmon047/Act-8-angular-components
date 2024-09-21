import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdcheckerComponent } from './idchecker.component';

describe('IdcheckerComponent', () => {
  let component: IdcheckerComponent;
  let fixture: ComponentFixture<IdcheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdcheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdcheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
