import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Component({
 selector: 'app-standard-form-error',
 standalone: true,
 imports:[CommonModule],
 template: `
   <div *ngIf="control?.invalid && control?.touched"
     >
       <small class="text-red-500"> {{ getMessage() }}</small>
     </div>
 `
})
export class StandardFormErrorComponent {
  @Input() control!: AbstractControl | null;
  @Input() fieldName: string = 'This field';

  getMessage(): string {
    const control = this.control;
    if (!control || !control.errors) return '';

    if (control.errors['required']) return `${this.fieldName} is required.`;
    if (control.errors['minlength']) {
      return `${this.fieldName} must be at least ${control.errors['minlength'].requiredLength} characters long.`;
    }
    if (control.errors['maxlength']) {
      return `${this.fieldName} must be at most ${control.errors['maxlength'].requiredLength} characters long.`;
    }
    if (control.errors['pattern']) return `${this.fieldName} has an invalid format.`;

    return `${this.fieldName} is invalid.`;
  }
}
