import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-standard-button',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './standard-button.component.html',
  styleUrl: './standard-button.component.scss',
})
export class StandardButtonComponent {
  @Input() label: string = 'Button';
  @Input() type: string = 'button';
  @Input() styleClass: string = '';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;

  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled && !this.loading) {
      this.onClick.emit();
    }
  }
}
