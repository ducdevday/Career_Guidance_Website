import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { StandardTitleComponent } from '../../../shared/components/standard-title/standard-title.component';
import { StandardCardComponent } from '../../../shared/components/standard-card/standard-card.component';
import { CalendarModule } from 'primeng/calendar';
import { MainSearchComponent } from '../../../shared/components/main-search/main-search.component';
import { MainSortComponent } from '../../../shared/components/main-sort/main-sort.component';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { MainFilterComponent } from '../../../shared/components/main-filter/main-filter.component';

@Component({
  selector: 'app-mentor-management',
  standalone: true,
  imports: [CommonModule, InputTextModule, StandardTitleComponent, StandardCardComponent, CalendarModule, MainSearchComponent, MainSortComponent, DividerModule, TableModule, MainFilterComponent],
  templateUrl: './mentor-management.component.html',
  styleUrl: './mentor-management.component.scss'
})
export class MentorManagementComponent {
  sortBy = 'Date';
  status = 'Finish';

  sortOptions = ['Date', 'Name'];
  mentors = [
    {
      id: 1,
      name: 'Nguyen Van A',
      email: 'a.nguyen@example.com',
      phone: '0909123456',
      industry: 'Software',
      position: 'Senior Developer',
      yoe: 5,
      status: 'Active',
      createdDate: '2023-07-01',
    },
    {
      id: 2,
      name: 'Tran Thi B',
      email: 'b.tran@example.com',
      phone: '0911222333',
      industry: 'Finance',
      position: 'Financial Analyst',
      yoe: 7,
      status: 'DeActive',
      createdDate: '2023-06-15',
    },
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
