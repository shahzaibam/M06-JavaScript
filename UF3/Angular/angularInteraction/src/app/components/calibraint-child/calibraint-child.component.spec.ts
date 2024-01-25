import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibraintChildComponent } from './calibraint-child.component';

describe('CalibraintChildComponent', () => {
  let component: CalibraintChildComponent;
  let fixture: ComponentFixture<CalibraintChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalibraintChildComponent]
    });
    fixture = TestBed.createComponent(CalibraintChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
