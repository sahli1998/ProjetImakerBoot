import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatstepComponent } from './chatstep.component';

describe('ChatstepComponent', () => {
  let component: ChatstepComponent;
  let fixture: ComponentFixture<ChatstepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatstepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
