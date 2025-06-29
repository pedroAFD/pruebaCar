import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingPanelComponentComponent } from './messaging-panel-component.component';

describe('MessagingPanelComponentComponent', () => {
  let component: MessagingPanelComponentComponent;
  let fixture: ComponentFixture<MessagingPanelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagingPanelComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagingPanelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
