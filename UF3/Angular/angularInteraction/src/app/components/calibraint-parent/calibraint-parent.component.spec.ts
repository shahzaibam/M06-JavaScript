import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibraintParentComponent } from './calibraint-parent.component';

describe('CalibraintParentComponent', () => {
  let component: CalibraintParentComponent;
  let fixture: ComponentFixture<CalibraintParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalibraintParentComponent]
    });
    fixture = TestBed.createComponent(CalibraintParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
