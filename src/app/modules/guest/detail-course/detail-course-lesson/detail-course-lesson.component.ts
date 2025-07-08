import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-course-lesson',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-course-lesson.component.html',
  styleUrl: './detail-course-lesson.component.scss',
})
export class DetailCourseLessonComponent {
  @Input() section: any;
  @Input() hideDivider = false;

  isExpanded = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
