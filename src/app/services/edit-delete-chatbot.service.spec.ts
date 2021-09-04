import { TestBed } from '@angular/core/testing';

import { EditDeleteChatbotService } from './edit-delete-chatbot.service';

describe('EditDeleteChatbotService', () => {
  let service: EditDeleteChatbotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditDeleteChatbotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
