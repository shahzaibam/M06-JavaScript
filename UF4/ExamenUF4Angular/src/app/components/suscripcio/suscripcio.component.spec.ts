import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcioComponent } from './suscripcio.component';

describe('SuscripcioComponent', () => {
  let component: SuscripcioComponent;
  let fixture: ComponentFixture<SuscripcioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuscripcioComponent]
    });
    fixture = TestBed.createComponent(SuscripcioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
