import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface ActionButton {
  icon?: string;                         // ví dụ: 'pi-save', 'pi-times'
  label: string;
  action: string;                        // 'save' | 'close' | 'tên-khác'
  disabled?: boolean;
  tooltip?: string;
}

@Component({
  selector: 'app-standard-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standard-options.component.html',
  styleUrls: ['./standard-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandardOptionsComponent implements OnChanges {
  @Input() buttons: ActionButton[] = [];

  @Input() showSave = true;
  @Input() showClose = true;

  @Input() saveDisabled = false;
  @Input() closeDisabled = false;

  /** Đích khi Close. Mặc định: ['..'] (parent). Có thể truyền string hoặc mảng commands. */
  @Input() closeTo: string | any[] = ['..'];

  /** Có giữ nguyên query params khi Close không */
  @Input() preserveQueryParams = false;

  @Output() buttonClick = new EventEmitter<string>();

  finalButtons: ActionButton[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnChanges(): void {
    const saveBtn: ActionButton[] = this.showSave
      ? [{ icon: 'pi-save', label: 'Save', action: 'save', disabled: this.saveDisabled }]
      : [];

    const closeBtn: ActionButton[] = this.showClose
      ? [{ icon: 'pi-times', label: 'Close', action: 'close', disabled: this.closeDisabled }]
      : [];

    // Thứ tự luôn: Save → Custom → Close
    const custom = this.buttons ?? [];
    this.finalButtons = [...saveBtn, ...custom, ...closeBtn];
  }

  trackByAction = (_: number, b: ActionButton) => b.action;

  onClick(btn: ActionButton) {
    if (btn.disabled) return;
    if (btn.action === 'close') {
      this.navigateClose();
      return;
    }
    this.buttonClick.emit(btn.action);
  }

  private navigateClose() {
    if (typeof this.closeTo === 'string') {
      this.router.navigateByUrl(this.closeTo);
    } else {
      this.router.navigate(this.closeTo as any[], {
        relativeTo: this.route,
        queryParamsHandling: this.preserveQueryParams ? 'preserve' : undefined,
        replaceUrl: false
      });
    }
  }
}
