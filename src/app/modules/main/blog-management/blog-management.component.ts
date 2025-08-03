import { Component } from '@angular/core';
import { StandardTitleComponent } from "../../../shared/components/standard-title/standard-title.component";
import { StandardCardComponent } from "../../../shared/components/standard-card/standard-card.component";
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { MainSearchComponent } from '../../../shared/components/main-search/main-search.component';
import { MainSortComponent } from '../../../shared/components/main-sort/main-sort.component';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { MainFilterComponent } from "../../../shared/components/main-filter/main-filter.component";

@Component({
  selector: 'app-blog-management',
  standalone: true,
  imports: [CommonModule, InputTextModule, StandardTitleComponent, StandardCardComponent, CalendarModule, MainSearchComponent, MainSortComponent, DividerModule, TableModule, MainFilterComponent],
  templateUrl: './blog-management.component.html',
  styleUrl: './blog-management.component.scss'
})
export class BlogManagementComponent {
  sortBy = 'Date';
  status = 'Finish';

  sortOptions = ['Date', 'Name'];
  statusOptions = ['All','New', 'Approved', 'Rejected'];
  blogs = [
    {
      id: 1,
      name: 'Understanding Angular Lifecycle Hooks',
      category: 'Angular',
      timeToRead: '5 min',
      status: 'Approved',
      createdBy: 'Duc Nguyen',
      createdDate: '2024-08-01'
    },
    {
      id: 2,
      name: 'Exploring ASP.NET Core Minimal APIs',
      category: '.NET',
      timeToRead: '8 min',
      status: 'New',
      createdBy: 'Minh Tran',
      createdDate: '2024-08-03'
    },
    {
      id: 3,
      name: 'CSS Grid vs Flexbox: When to Use What?',
      category: 'Frontend',
      timeToRead: '6 min',
      status: 'Rejected',
      createdBy: 'Lan Pham',
      createdDate: '2024-08-04'
    }
  ];
  onSearch(value: string) {
    console.log('Search:', value);
  }

  onSortByChange(value: string) {
    this.sortBy = value;
  }

  onStatusChange(value: string) {
    this.status = value;
  }
}
