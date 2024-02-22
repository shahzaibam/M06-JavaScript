import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvesConnectarComponent } from './proves-connectar.component';

describe('ProvesConnectarComponent', () => {
  let component: ProvesConnectarComponent;
  let fixture: ComponentFixture<ProvesConnectarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvesConnectarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvesConnectarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
