import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamscannerComponent } from './camscanner.component';

describe('CamscannerComponent', () => {
  let component: CamscannerComponent;
  let fixture: ComponentFixture<CamscannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamscannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamscannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
