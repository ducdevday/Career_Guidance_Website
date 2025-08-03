import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

export interface ActionButton {
  icon: string;
  label: string;
  disabled?: boolean;
  action?: string; 
}

@Component({
  selector: 'app-standard-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standard-options.component.html',
  styleUrl: './standard-options.component.scss'
})
export class StandardOptionsComponent {
  @Input() buttons: ActionButton[] = [];

  @Input() showSave = true;
  @Input() showClose = true;

  @Input() saveDisabled = false;
  @Input() closeDisabled = false;

  @Output() buttonClick = new EventEmitter<string>();

  finalButtons: ActionButton[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const defaultButtons: ActionButton[] = [];

    if (this.showSave) {
      defaultButtons.push({
        icon: 'pi-save',
        label: 'Save',
        action: 'save',
        disabled: this.saveDisabled
      });
    }

    if (this.showClose) {
      defaultButtons.push({
        icon: 'pi-times',
        label: 'Close',
        action: 'close',
        disabled: this.closeDisabled
      });
    }

    this.finalButtons = [...defaultButtons, ...this.buttons];
  }

  onClick(button: ActionButton) {
    if (button.disabled) return;

    if (button.action === 'close') {
      this.navigateToParent();
    } else {
      this.buttonClick.emit(button.action);
    }
  }

  private navigateToParent() {
    const currentUrl = this.router.url;
    const segments = currentUrl.split('/');
    segments.pop(); // Remove last segment
    const parentUrl = segments.join('/') || '/';
    this.router.navigateByUrl(parentUrl);
  }
}
