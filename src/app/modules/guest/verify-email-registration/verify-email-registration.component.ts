import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StandardButtonComponent } from '../../../shared/components/standard-button/standard-button.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../services/toast.service';
import { InputOtpModule } from 'primeng/inputotp';
import { InputTextModule } from 'primeng/inputtext';
import { AppState } from '../../../stores/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StandardInputLabelComponent } from '../../../shared/components/standard-input-label/standard-input-label.component';
import { ValidationConstant } from '../../../shared/constant/validation-constant';
import { verifyEmailRegistrationAction } from '../../../stores/verify-email-registration/verify-email-registration.action';
import { StandardFormErrorComponent } from "../../../shared/components/standard-form-error/standard-form-error";

@Component({
  selector: 'app-verify-email-registration',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StandardButtonComponent,
    InputOtpModule,
    InputTextModule,
    StandardInputLabelComponent,
    StandardFormErrorComponent
],
  templateUrl: './verify-email-registration.component.html',
  styleUrl: './verify-email-registration.component.scss',
})
export class VerifyEmailRegistrationComponent implements OnInit {
  verifyEmailRegistrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private store: Store<AppState>
  ) {
    this.verifyEmailRegistrationForm = this.fb.group({
      email: ['', [Validators.required]],
      code: [
        '',
        [
          Validators.required,
          Validators.minLength(
            ValidationConstant.EMAIL_VERIFICATION_CODE_LENGTH
          ),
          Validators.maxLength(
            ValidationConstant.EMAIL_VERIFICATION_CODE_LENGTH
          ),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const email = params['email'];
      if (email) {
        this.verifyEmailRegistrationForm.patchValue({ email });
      }
    });
  }

  onSubmit(event: Event) {
    if (!this.verifyEmailRegistrationForm.valid) {
      this.toastService.showError('Error', 'Invalid form data');
      return;
    }
    var request = {
      ...this.verifyEmailRegistrationForm.value,
    };
    this.store.dispatch(verifyEmailRegistrationAction({request}));
  }
}
