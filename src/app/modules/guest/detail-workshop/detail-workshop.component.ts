import { Component } from '@angular/core';
import { StandardBreadcrumbComponent } from "../../../shared/components/standard-breadcrumb/standard-breadcrumb.component";
import { DividerModule } from 'primeng/divider';
import { StandardButtonComponent } from "../../../shared/components/standard-button/standard-button.component";
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { DetailCourseInstructorComponent } from "../detail-course/detail-course-instructor/detail-course-instructor.component";
import { DetailWorkshopOwnerComponent } from "./detail-workshop-owner/detail-workshop-owner.component";
@Component({
  selector: 'app-detail-workshop',
  standalone: true,
  imports: [StandardBreadcrumbComponent, DividerModule, StandardButtonComponent, TabViewModule, CommonModule, DetailWorkshopOwnerComponent],
  templateUrl: './detail-workshop.component.html',
  styleUrl: './detail-workshop.component.scss'
})
export class DetailWorkshopComponent {
  title: string = 'Detail Workshop'
  activeIndex: number = 3;
}
