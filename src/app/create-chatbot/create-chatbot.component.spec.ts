import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChatbotComponent } from './create-chatbot.component';

describe('CreateChatbotComponent', () => {
  let component: CreateChatbotComponent;
  let fixture: ComponentFixture<CreateChatbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateChatbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
