import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-sort',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-sort.component.html',
  styleUrl: './main-sort.component.scss'
})
export class MainSortComponent {
  @Input() value = '';
  @Input() options: string[] = [];
  @Output() sortByChange = new EventEmitter<string>();

  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.sortByChange.emit(value);
  }
}
