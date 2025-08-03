import { Component } from '@angular/core';
import { StandardBreadcrumbComponent } from "../../../shared/components/standard-breadcrumb/standard-breadcrumb.component";
import { TabViewModule } from "primeng/tabview";
import { StandardCourseComponent } from "../../../shared/components/standard-course/standard-course.component";
import { StandardWorkshopComponent } from "../../../shared/components/standard-workshop/standard-workshop.component";
import { StandardReviewComponent } from "../../../shared/components/standard-review/standard-review.component";
import { DividerModule } from "primeng/divider";

@Component({
  selector: 'app-profile-school',
  standalone: true,
  imports: [StandardBreadcrumbComponent, TabViewModule, StandardCourseComponent, StandardWorkshopComponent, StandardReviewComponent, DividerModule],
  templateUrl: './profile-school.component.html',
  styleUrl: './profile-school.component.scss'
})
export class ProfileSchoolComponent {
  title = "Profile School"
  activeIndex: number = 1;
}
