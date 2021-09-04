import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaintAssistantComponent } from './containt-assistant.component';

describe('ContaintAssistantComponent', () => {
  let component: ContaintAssistantComponent;
  let fixture: ComponentFixture<ContaintAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaintAssistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaintAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
