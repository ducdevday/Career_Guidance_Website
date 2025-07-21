import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-filter.component.html',
  styleUrl: './main-filter.component.scss'
})
export class MainFilterComponent {
  @Input() value = '';
  @Input() options: string[] = [];
  @Output() statusChange = new EventEmitter<string>();

  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.statusChange.emit(value);
  }
}
