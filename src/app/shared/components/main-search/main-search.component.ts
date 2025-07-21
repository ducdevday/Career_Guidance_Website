import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-search',
  standalone: true,
  imports: [],
  templateUrl: './main-search.component.html',
  styleUrl: './main-search.component.scss'
})
export class MainSearchComponent {
  @Output() search = new EventEmitter<string>();

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }
}
