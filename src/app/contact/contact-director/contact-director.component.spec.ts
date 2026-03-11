import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDirectorComponent } from './contact-director.component';

describe('ContactDirectorComponent', () => {
  let component: ContactDirectorComponent;
  let fixture: ComponentFixture<ContactDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDirectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
