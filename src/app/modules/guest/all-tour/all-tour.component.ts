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
  selector: 'app-all-tour',
  standalone: true,
  imports: [DropdownModule, CommonModule, BreadcrumbModule, StandardBreadcrumbComponent,InputTextModule, InputGroupModule, InputGroupAddonModule, DividerModule, PaginatorModule, StandardFilterComponent ],
  templateUrl: './all-tour.component.html',
  styleUrl: './all-tour.component.scss'
})
export class AllTourComponent {
  title: string = 'All Tour'
  isExpandIndustry = true;
  isExpandRating = true;
  isExpandDuration = true;

  sortOptions = [
    { label: 'Trending', value: 'trending' },
    { label: 'Newest', value: 'newest' },
  ];
}
