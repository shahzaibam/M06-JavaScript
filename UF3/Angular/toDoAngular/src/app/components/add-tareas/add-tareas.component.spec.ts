import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTareasComponent } from './add-tareas.component';

describe('AddTareasComponent', () => {
  let component: AddTareasComponent;
  let fixture: ComponentFixture<AddTareasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTareasComponent]
    });
    fixture = TestBed.createComponent(AddTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
