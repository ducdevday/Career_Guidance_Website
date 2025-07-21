import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-processbar',
  standalone: true,
  imports: [],
  templateUrl: './circle-processbar.component.html',
  styleUrl: './circle-processbar.component.scss'
})
export class CircleProcessbarComponent {
  @Input() progress = 0;
}
