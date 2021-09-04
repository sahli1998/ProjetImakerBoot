import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroLuisComponent } from './micro-luis.component';

describe('MicroLuisComponent', () => {
  let component: MicroLuisComponent;
  let fixture: ComponentFixture<MicroLuisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroLuisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroLuisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
