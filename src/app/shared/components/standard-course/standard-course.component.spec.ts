import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCourseComponent } from './standard-course.component';

describe('StandardCourseComponent', () => {
  let component: StandardCourseComponent;
  let fixture: ComponentFixture<StandardCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandardCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
