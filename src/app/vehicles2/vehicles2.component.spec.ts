import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vehicles2Component } from './vehicles2.component';

describe('Vehicles2Component', () => {
  let component: Vehicles2Component;
  let fixture: ComponentFixture<Vehicles2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vehicles2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vehicles2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
