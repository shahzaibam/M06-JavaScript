import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiensomComponent } from './quiensom.component';

describe('QuiensomComponent', () => {
  let component: QuiensomComponent;
  let fixture: ComponentFixture<QuiensomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuiensomComponent]
    });
    fixture = TestBed.createComponent(QuiensomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
