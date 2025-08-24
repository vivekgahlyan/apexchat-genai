import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexChatComponent } from './apex-chat.component';

describe('ApexChatComponent', () => {
  let component: ApexChatComponent;
  let fixture: ComponentFixture<ApexChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApexChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApexChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
