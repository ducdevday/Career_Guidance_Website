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

@Component({
  selector: 'app-company-management',
  standalone: true,
  imports: [CommonModule, InputTextModule, StandardTitleComponent, StandardCardComponent, CalendarModule, MainSearchComponent, MainSortComponent, DividerModule, TableModule],
  templateUrl: './company-management.component.html',
  styleUrl: './company-management.component.scss'
})
export class CompanyManagementComponent {
  sortBy = 'Date';
  status = 'Finish';

  sortOptions = ['Date', 'Name'];
  companies = [
    {
      id: 1,
      name: 'FPT Software',
      email: 'contact@fpt.com.vn',
      phone: '028 9999 8888',
      industry: 'Software Outsourcing',
      status: 'Active',
      createdDate: '2023-07-01',
    },
    {
      id: 2,
      name: 'Viettel Group',
      email: 'info@viettel.com.vn',
      phone: '024 7890 1234',
      industry: 'Telecommunications',
      status: 'DeActive',
      createdDate: '2023-06-15',
    },
    {
      id: 3,
      name: 'Tiki Corporation',
      email: 'support@tiki.vn',
      phone: '1900 6035',
      industry: 'E-commerce',
      status: 'Active',
      createdDate: '2023-08-01',
    },
    {
      id: 4,
      name: 'Shopee Vietnam',
      email: 'care@shopee.vn',
      phone: '1900 1221',
      industry: 'Online Retail',
      status: 'DeActive',
      createdDate: '2023-05-10',
    },
    {
      id: 5,
      name: 'Grab Holdings',
      email: 'support@grab.com',
      phone: '028 7300 5588',
      industry: 'Transportation & Delivery',
      status: 'Active',
      createdDate: '2023-04-20',
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
