import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { StandardBreadcrumbComponent } from "../../../shared/components/standard-breadcrumb/standard-breadcrumb.component";
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule } from 'primeng/paginator';
import { StandardFilterComponent } from '../../../shared/components/standard-filter/standard-filter.component';
@Component({
  selector: 'app-all-course',
  standalone: true,
  imports: [DropdownModule, CommonModule, BreadcrumbModule, StandardBreadcrumbComponent,InputTextModule, InputGroupModule, InputGroupAddonModule, DividerModule, PaginatorModule, StandardFilterComponent ],
  templateUrl: './all-course.component.html',
  styleUrl: './all-course.component.scss'
})
export class AllCourseComponent {
  title: string = 'All Course'
  isExpandIndustry = true;
  isExpandRating = true;
  isExpandDuration = true;

  sortOptions = [
    { label: 'Trending', value: 'trending' },
    { label: 'Newest', value: 'newest' },
  ];
  ratingOptions = ['5 star', '4 star & up', '3 star & up', '2 star & up', '1 star & up'];
 
}
