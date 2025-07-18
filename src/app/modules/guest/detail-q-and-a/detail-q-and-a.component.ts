import { Component, Input } from '@angular/core';
import { StandardBreadcrumbComponent } from "../../../shared/components/standard-breadcrumb/standard-breadcrumb.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditorModule } from 'primeng/editor'
import { StandardButtonComponent } from "../../../shared/components/standard-button/standard-button.component";
import { DividerModule } from "primeng/divider";
@Component({
  selector: 'app-detail-q-and-a',
  standalone: true,
  imports: [StandardBreadcrumbComponent, ReactiveFormsModule, EditorModule, StandardButtonComponent, DividerModule],
  templateUrl: './detail-q-and-a.component.html',
  styleUrl: './detail-q-and-a.component.scss'
})
export class DetailQAndAComponent {
  title = "Detail Q&A"
  items: any[] | undefined;

  exampleForm: FormGroup ;

  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {
      this.exampleForm = this.fb.group({
          text: ['', Validators.required]
      });
  }

  onSubmit() {
      this.formSubmitted = true;
      if (this.exampleForm.valid) {
          this.exampleForm.reset();
          this.formSubmitted = false;
      }
  }

  isInvalid(controlName: string) {
      const control = this.exampleForm.get(controlName);
      return control?.invalid && (control.touched || this.formSubmitted);
  }
}
