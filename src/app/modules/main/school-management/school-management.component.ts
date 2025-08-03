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
  selector: 'app-school-management',
  standalone: true,
  imports: [CommonModule, InputTextModule, StandardTitleComponent, StandardCardComponent, CalendarModule, MainSearchComponent, MainSortComponent, DividerModule, TableModule],
  templateUrl: './school-management.component.html',
  styleUrl: './school-management.component.scss'
})
export class SchoolManagementComponent {
  sortBy = 'Date';
  status = 'Finish';

  sortOptions = ['Date', 'Name'];
  schools = [
    {
      id: 1,
      name: 'Trường Đại học Bách Khoa Hà Nội',
      email: 'contact@hust.edu.vn',
      phone: '024 3869 4242',
      industry: 'Engineering',
      status: 'Active',
      createdDate: '2023-07-01',
    },
    {
      id: 2,
      name: 'Đại học Kinh tế Quốc dân',
      email: 'info@neu.edu.vn',
      phone: '024 3628 0280',
      industry: 'Economics',
      status: 'DeActive',
      createdDate: '2023-06-12',
    },
    {
      id: 3,
      name: 'Trường Đại học FPT',
      email: 'admissions@fpt.edu.vn',
      phone: '024 7300 5588',
      industry: 'Information Technology',
      status: 'Active',
      createdDate: '2023-05-25',
    },
    {
      id: 4,
      name: 'Đại học Ngoại thương',
      email: 'support@ftu.edu.vn',
      phone: '024 3835 6800',
      industry: 'International Business',
      status: 'DeActive',
      createdDate: '2023-04-20',
    },
    {
      id: 5,
      name: 'Trường Đại học Sư phạm Hà Nội',
      email: 'contact@hnue.edu.vn',
      phone: '024 3754 7823',
      industry: 'Education',
      status: 'Active',
      createdDate: '2023-08-01',
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
