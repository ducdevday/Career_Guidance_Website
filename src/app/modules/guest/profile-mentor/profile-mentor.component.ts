import { Component } from '@angular/core';
import { StandardBreadcrumbComponent } from "../../../shared/components/standard-breadcrumb/standard-breadcrumb.component";
import { TabViewModule } from "primeng/tabview";
import { DividerModule } from "primeng/divider";
import { StandardCourseComponent } from "../../../shared/components/standard-course/standard-course.component";
import { StandardReviewComponent } from "../../../shared/components/standard-review/standard-review.component";

@Component({
  selector: 'app-profile-mentor',
  standalone: true,
  imports: [StandardBreadcrumbComponent, TabViewModule, DividerModule, StandardCourseComponent, StandardReviewComponent],
  templateUrl: './profile-mentor.component.html',
  styleUrl: './profile-mentor.component.scss'
})
export class ProfileMentorComponent {
  title = "Profile Mentor"
  activeIndex: number = 1;
}
