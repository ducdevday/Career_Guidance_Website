import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DropdownModule } from 'primeng/dropdown';
import { StandardBreadcrumbComponent } from '../../../shared/components/standard-breadcrumb/standard-breadcrumb.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule } from 'primeng/paginator';
import { StandardFilterComponent } from '../../../shared/components/standard-filter/standard-filter.component';

@Component({
  selector: 'app-all-mentor',
  standalone: true,
  imports: [DropdownModule, CommonModule, BreadcrumbModule, StandardBreadcrumbComponent,InputTextModule, InputGroupModule, InputGroupAddonModule, DividerModule, PaginatorModule, StandardFilterComponent ],
  templateUrl: './all-mentor.component.html',
  styleUrl: './all-mentor.component.scss'
})
export class AllMentorComponent {
  title: string = 'All Mentor'
  isExpandIndustry = true;
  isExpandRating = true;
  isExpandDuration = true;

  sortOptions = [
    { label: 'Trending', value: 'trending' },
    { label: 'Newest', value: 'newest' },
  ];
}
