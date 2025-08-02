import { Component } from '@angular/core';
import { StandardTitleComponent } from '../../../shared/components/standard-title/standard-title.component';
import { StandardCardComponent } from '../../../shared/components/standard-card/standard-card.component';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { MainSearchComponent } from "../../../shared/components/main-search/main-search.component";
import { MainSortComponent } from "../../../shared/components/main-sort/main-sort.component";
import { MainFilterComponent } from "../../../shared/components/main-filter/main-filter.component";
import { DividerModule } from "primeng/divider";
import { CircleProcessbarComponent } from "../../../shared/components/circle-processbar/circle-processbar.component";

@Component({
  selector: 'app-my-course',
  standalone: true,
  imports: [CommonModule, InputTextModule, StandardTitleComponent, StandardCardComponent, CalendarModule, MainSearchComponent, MainSortComponent, MainFilterComponent, DividerModule, CircleProcessbarComponent],
  templateUrl: './my-course.component.html',
  styleUrl: './my-course.component.scss'
})
export class MyCourseComponent {
  sortBy = 'Date';
  status = 'Finish';

  sortOptions = ['Date', 'Name', 'Priority'];
  statusOptions = ['Finish', 'In Progress', 'Pending'];

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
