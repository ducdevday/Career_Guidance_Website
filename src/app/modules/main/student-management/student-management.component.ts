import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from "primeng/table";
import { MainSearchComponent } from '../../../shared/components/main-search/main-search.component';
import { MainSortComponent } from '../../../shared/components/main-sort/main-sort.component';
import { StandardCardComponent } from '../../../shared/components/standard-card/standard-card.component';
import { StandardTitleComponent } from "../../../shared/components/standard-title/standard-title.component";

@Component({
  selector: 'app-student-management',
  standalone: true,
  imports: [CommonModule, InputTextModule, StandardTitleComponent, StandardCardComponent, CalendarModule, MainSearchComponent, MainSortComponent, DividerModule, TableModule],
  templateUrl: './student-management.component.html',
  styleUrl: './student-management.component.scss'
})
export class StudentManagementComponent {
  sortBy = 'Date';
  status = 'Finish';

  sortOptions = ['Date', 'Name', 'Priority'];
  students = [
    {
      id: 1,
      name: 'Nguyen Van A',
      email: 'a.nguyen@example.com',
      phoneNumber: '0901234567',
      status: 'Active',
      createdDate: '2024-08-01'
    },
    {
      id: 2,
      name: 'Tran Thi B',
      email: 'b.tran@example.com',
      phoneNumber: '0912345678',
      status: 'Inactive',
      createdDate: '2024-08-02'
    },
    {
      id: 3,
      name: 'Le Van C',
      email: 'c.le@example.com',
      phoneNumber: '0923456789',
      status: 'Pending',
      createdDate: '2024-08-03'
    }
  ];
  
  onSearch(value: string) {
    console.log('Search:', value);
  }

  onSortByChange(value: string) {
    this.sortBy = value;
  }

}
