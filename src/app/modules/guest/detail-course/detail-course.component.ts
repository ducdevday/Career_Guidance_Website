import { Component } from '@angular/core';
import { StandardBreadcrumbComponent } from "../../../shared/components/standard-breadcrumb/standard-breadcrumb.component";
import { DividerModule } from 'primeng/divider';
import { StandardButtonComponent } from "../../../shared/components/standard-button/standard-button.component";
import { TabViewModule } from 'primeng/tabview';
import { DetailCourseLessonComponent } from "./detail-course-lesson/detail-course-lesson.component";
import { CommonModule } from '@angular/common';
import { DetailCourseInstructorComponent } from "./detail-course-instructor/detail-course-instructor.component";
import { DetailCourseReviewComponent } from "./detail-course-review/detail-course-review.component";
@Component({
  selector: 'app-detail-course',
  standalone: true,
  imports: [StandardBreadcrumbComponent, DividerModule, StandardButtonComponent, TabViewModule, DetailCourseLessonComponent, CommonModule, DetailCourseInstructorComponent, DetailCourseReviewComponent],
  templateUrl: './detail-course.component.html',
  styleUrl: './detail-course.component.scss'
})
export class DetailCourseComponent {
  title: string = 'Detail Course'
  activeIndex: number = 3;
  sections = [
    {
      title: 'Getting Started',
      lectureCount: 202,
      duration: '19h 37m',
      lessons: [
        { title: 'Sign up in Webflow', duration: '07:31' },
        { title: 'Setup your workspace', duration: '04:20' },
      ]
    },
    {
      title: 'Advanced Features',
      lectureCount: 150,
      duration: '12h 10m',
      lessons: [
        { title: 'Using CMS', duration: '06:45' },
        { title: 'Animation basics', duration: '08:12' },
      ]
    }
  ];
}
