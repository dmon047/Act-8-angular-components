import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoclickerComponent } from './autoclicker.component';

describe('AutoclickerComponent', () => {
  let component: AutoclickerComponent;
  let fixture: ComponentFixture<AutoclickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoclickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoclickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
