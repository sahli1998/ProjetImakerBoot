import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAfterAuthentificationComponent } from './header-after-authentification.component';

describe('HeaderAfterAuthentificationComponent', () => {
  let component: HeaderAfterAuthentificationComponent;
  let fixture: ComponentFixture<HeaderAfterAuthentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAfterAuthentificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAfterAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
