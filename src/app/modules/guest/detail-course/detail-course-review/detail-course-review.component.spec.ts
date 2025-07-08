import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCourseReviewComponent } from './detail-course-review.component';

describe('DetailCourseReviewComponent', () => {
  let component: DetailCourseReviewComponent;
  let fixture: ComponentFixture<DetailCourseReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCourseReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailCourseReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
