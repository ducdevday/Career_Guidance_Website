import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-standard-title',
  standalone: true,
  imports: [],
  templateUrl: './standard-title.component.html',
  styleUrl: './standard-title.component.scss',
})
export class StandardTitleComponent {
  @Input() title: string = '';
}
