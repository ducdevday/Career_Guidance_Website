import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageService: MessageService) {}

  /**
   * Show a toast message
   * @param summary Summary text
   * @param detail Detail text
   * @param sticky Whether the toast should be sticky
   * @param life Duration in milliseconds
   */
  showSuccess(
    summary: string,
    detail?: string,
    sticky: boolean = false,
    life: number = 3000
  ): void {
    this.messageService.add({
      severity: 'success',
      summary: summary,
      detail: detail,
      sticky: sticky,
      life: life,
    });
  }

  showInfo(
    summary: string,
    detail?: string,
    sticky: boolean = false,
    life: number = 3000
  ): void {
    this.messageService.add({
      severity: 'info',
      summary: summary,
      detail: detail,
      sticky: sticky,
      life: life,
    });
  }

  showWarning(
    summary: string,
    detail?: string,
    sticky: boolean = false,
    life: number = 3000
  ): void {
    this.messageService.add({
      severity: 'warn',
      summary: summary,
      detail: detail,
      sticky: sticky,
      life: life,
    });
  }

  showError(
    summary: string,
    detail?: string,
    sticky: boolean = false,
    life: number = 3000
  ): void {
    this.messageService.add({
      severity: 'error',
      summary: summary,
      detail: detail,
      sticky: sticky,
      life: life,
    });
  }

  clear(): void {
    this.messageService.clear();
  }
}
