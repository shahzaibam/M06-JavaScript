import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorNumericoComponent } from './selector-numerico.component';

describe('SelectorNumericoComponent', () => {
  let component: SelectorNumericoComponent;
  let fixture: ComponentFixture<SelectorNumericoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorNumericoComponent]
    });
    fixture = TestBed.createComponent(SelectorNumericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});