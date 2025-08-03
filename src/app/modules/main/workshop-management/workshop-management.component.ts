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
  selector: 'app-workshop-management',
  standalone: true,
  imports: [CommonModule, InputTextModule, StandardTitleComponent, StandardCardComponent, CalendarModule, MainSearchComponent, MainSortComponent, DividerModule, TableModule, MainFilterComponent],
  templateUrl: './workshop-management.component.html',
  styleUrl: './workshop-management.component.scss'
})
export class WorkshopManagementComponent {
  sortBy = 'Date';
  status = 'Finish';

  sortOptions = ['Date', 'Name'];
  statusOptions = ['All','New', 'Approved', 'Rejected'];
  workshops = [
    {
      id: 1,
      name: 'Kỹ năng thuyết trình chuyên nghiệp',
      category: 'Soft Skills',
      time: '2024-09-10 14:00',
      location: 'Hội trường A1 - Đại học Bách Khoa',
      status: 'Approved',
      createdBy: 'Nguyen Van A',
      createdDate: '2024-08-01',
    },
    {
      id: 2,
      name: 'Lập trình Web với Angular',
      category: 'Technology',
      time: '2024-09-15 09:00',
      location: 'Phòng Lab 203 - ĐH FPT',
      status: 'New',
      createdBy: 'Tran Thi B',
      createdDate: '2024-08-03',
    },
    {
      id: 3,
      name: 'Kỹ năng quản lý thời gian',
      category: 'Soft Skills',
      time: '2024-09-18 13:30',
      location: 'Phòng 302 - ĐH Ngoại Thương',
      status: 'Rejected',
      createdBy: 'Le Van C',
      createdDate: '2024-08-02',
    },
    {
      id: 4,
      name: 'Thiết kế UI/UX cơ bản',
      category: 'Design',
      time: '2024-09-20 15:00',
      location: 'Zoom Online',
      status: 'Approved',
      createdBy: 'Nguyen Thi D',
      createdDate: '2024-08-01',
    },
    {
      id: 5,
      name: 'Phân tích dữ liệu với Excel',
      category: 'Data Analysis',
      time: '2024-09-12 10:00',
      location: 'Phòng 501 - NEU',
      status: 'New',
      createdBy: 'Pham Van E',
      createdDate: '2024-08-03',
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
