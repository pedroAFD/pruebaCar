import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarViewComponentComponent } from './calendar-view-component.component';

describe('CalendarViewComponentComponent', () => {
  let component: CalendarViewComponentComponent;
  let fixture: ComponentFixture<CalendarViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarViewComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
