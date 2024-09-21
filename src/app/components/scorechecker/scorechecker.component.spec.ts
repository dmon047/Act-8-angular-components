import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecheckerComponent } from './scorechecker.component';

describe('ScorecheckerComponent', () => {
  let component: ScorecheckerComponent;
  let fixture: ComponentFixture<ScorecheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScorecheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScorecheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
