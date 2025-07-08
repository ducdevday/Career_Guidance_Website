import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCourseInstructorComponent } from './detail-course-instructor.component';

describe('DetailCourseInstructorComponent', () => {
  let component: DetailCourseInstructorComponent;
  let fixture: ComponentFixture<DetailCourseInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCourseInstructorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailCourseInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
