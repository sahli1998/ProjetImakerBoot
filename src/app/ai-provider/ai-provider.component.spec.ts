import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiProviderComponent } from './ai-provider.component';

describe('AiProviderComponent', () => {
  let component: AiProviderComponent;
  let fixture: ComponentFixture<AiProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
