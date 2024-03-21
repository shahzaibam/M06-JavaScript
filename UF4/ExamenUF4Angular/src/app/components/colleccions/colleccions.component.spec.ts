import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleccionsComponent } from './colleccions.component';

describe('ColleccionsComponent', () => {
  let component: ColleccionsComponent;
  let fixture: ComponentFixture<ColleccionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColleccionsComponent]
    });
    fixture = TestBed.createComponent(ColleccionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
