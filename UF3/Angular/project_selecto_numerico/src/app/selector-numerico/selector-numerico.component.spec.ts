import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorNumericoComponent } from './selector-numerico.component';

describe('SelectorNumericoComponent', () => {
  let component: SelectorNumericoComponent;
  let fixture: ComponentFixture<SelectorNumericoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorNumericoComponent],
      // Add other necessary modules here
    });
    fixture = TestBed.createComponent(SelectorNumericoComponent);
    component = fixture.componentInstance;
    // Omit fixture.detectChanges() if not needed
  });

  it('should create the SelectorNumericoComponent', () => {
    expect(component).toBeTruthy();
  });
});
