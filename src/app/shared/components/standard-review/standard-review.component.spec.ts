import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardReviewComponent } from './standard-review.component';

describe('StandardReviewComponent', () => {
  let component: StandardReviewComponent;
  let fixture: ComponentFixture<StandardReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandardReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
