import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ProgressBarModule } from 'primeng/progressbar';
@Component({
  selector: 'app-detail-course-review',
  standalone: true,
  imports: [ProgressBarModule,DividerModule ],
  templateUrl: './detail-course-review.component.html',
  styleUrl: './detail-course-review.component.scss'
})
export class DetailCourseReviewComponent {

}
