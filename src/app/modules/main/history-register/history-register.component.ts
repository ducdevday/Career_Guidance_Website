import { Component } from '@angular/core';
import { StandardTitleComponent } from "../../../shared/components/standard-title/standard-title.component";
import { StandardCardComponent } from "../../../shared/components/standard-card/standard-card.component";
import { MainSearchComponent } from "../../../shared/components/main-search/main-search.component";
import { MainSortComponent } from "../../../shared/components/main-sort/main-sort.component";
import { MainFilterComponent } from "../../../shared/components/main-filter/main-filter.component";
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-history-register',
  standalone: true,
  imports: [StandardTitleComponent, StandardCardComponent, MainSearchComponent, MainSortComponent, MainFilterComponent, TableModule, CommonModule],
  templateUrl: './history-register.component.html',
  styleUrl: './history-register.component.scss'
})
export class HistoryRegisterComponent {
  sortBy = 'Date';
  status = 'Finish';

  sortOptions = ['Date', 'Name', 'Priority'];
  statusOptions = ['Finish', 'In Progress', 'Pending'];
  histories: any[] = [];
  onSearch(value: string) {
    console.log('Search:', value);
  }

  onSortByChange(value: string) {
    this.sortBy = value;
  }

  onStatusChange(value: string) {
    this.status = value;
  }

  constructor(){
    this.histories = [
      { id: 1, name: 'Làm chủ Angular trong 30 ngày', type: 'Course', registerIn: '2024-07-01' },
      { id: 2, name: 'Thiết kế UI với Figma', type: 'Workshop', registerIn: '2024-07-02' },
      { id: 3, name: 'Khám phá Đà Lạt 3N2Đ', type: 'Tour', registerIn: '2024-07-03' },
      { id: 4, name: 'Lập trình Node.js từ A-Z', type: 'Course', registerIn: '2024-07-04' },
      { id: 5, name: 'Workshop: Thiết kế logo thương hiệu', type: 'Workshop', registerIn: '2024-07-05' },
      { id: 6, name: 'Tour biển Nha Trang', type: 'Tour', registerIn: '2024-07-06' },
      { id: 7, name: 'Khoá học React nâng cao', type: 'Course', registerIn: '2024-07-07' },
      { id: 8, name: 'Workshop: Viết nội dung thu hút', type: 'Workshop', registerIn: '2024-07-08' },
      { id: 9, name: 'Tour miền Tây sông nước', type: 'Tour', registerIn: '2024-07-09' },
      { id: 10, name: 'Khoá học Python cho người mới', type: 'Course', registerIn: '2024-07-10' }
    ];
  }
}
