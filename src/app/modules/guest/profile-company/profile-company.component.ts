import { Component } from '@angular/core';
import { StandardBreadcrumbComponent } from "../../../shared/components/standard-breadcrumb/standard-breadcrumb.component";
import { TabViewModule } from "primeng/tabview";
import { StandardCourseComponent } from "../../../shared/components/standard-course/standard-course.component";
import { StandardWorkshopComponent } from "../../../shared/components/standard-workshop/standard-workshop.component";
import { StandardTourComponent } from "../../../shared/components/standard-tour/standard-tour.component";
import { StandardReviewComponent } from "../../../shared/components/standard-review/standard-review.component";
import { DividerModule } from "primeng/divider";

@Component({
  selector: 'app-profile-company',
  standalone: true,
  imports: [StandardBreadcrumbComponent, TabViewModule, StandardCourseComponent, StandardWorkshopComponent, StandardTourComponent, StandardReviewComponent, DividerModule],
  templateUrl: './profile-company.component.html',
  styleUrl: './profile-company.component.scss'
})
export class ProfileCompanyComponent {
  title = "Profile Company"
  activeIndex: number = 1;
}
