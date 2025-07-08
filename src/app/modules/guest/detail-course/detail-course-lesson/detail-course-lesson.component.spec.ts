import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCourseLessonComponent } from './detail-course-lesson.component';

describe('DetailCourseLessonComponent', () => {
  let component: DetailCourseLessonComponent;
  let fixture: ComponentFixture<DetailCourseLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCourseLessonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailCourseLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
