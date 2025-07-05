import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-standard-filter',
  standalone: true,
  imports: [DividerModule, CommonModule],
  templateUrl: './standard-filter.component.html',
  styleUrl: './standard-filter.component.scss'
})
export class StandardFilterComponent {
  @Input() title!: string;
  @Input() options: string[] = [];
  @Input() iconClass: string = 'pi-angle-down';
  @Input() showStarIcon: boolean = false;
  isExpanded = true;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
