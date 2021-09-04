import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteChatbotComponent } from './edit-delete-chatbot.component';

describe('EditDeleteChatbotComponent', () => {
  let component: EditDeleteChatbotComponent;
  let fixture: ComponentFixture<EditDeleteChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteChatbotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
