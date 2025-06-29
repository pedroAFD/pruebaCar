import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBudgetPopupComponent } from './create-budget-popup.component';

describe('CreateBudgetPopupComponent', () => {
  let component: CreateBudgetPopupComponent;
  let fixture: ComponentFixture<CreateBudgetPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBudgetPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateBudgetPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
