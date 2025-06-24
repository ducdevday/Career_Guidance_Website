import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StandardButtonComponent } from '../../../shared/components/standard-button/standard-button.component';
import { InputOtpModule } from 'primeng/inputotp';
import { InputTextModule } from 'primeng/inputtext';
import { ToastService } from '../../../services/toast.service';
import { StepsModule } from 'primeng/steps';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StandardInputLabelComponent } from '../../../shared/components/standard-input-label/standard-input-label.component';
import { ValidationConstant } from '../../../shared/constant/validation-constant';
import { StandardFormErrorComponent } from "../../../shared/components/standard-form-error/standard-form-error";
@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StandardButtonComponent,
    InputOtpModule,
    InputTextModule,
    StepsModule,
    StandardInputLabelComponent,
    StandardFormErrorComponent
],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordPhase1Form!: FormGroup;
  forgotPasswordPhase2Form!: FormGroup;

  itemPhases = [
    {
      label: 'Verify Email',
    },
    {
      label: 'Verify Code And Set New Password',
    },
  ];
  currentPhases = 0;
  ngOnInit(): void {

  }
  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
  ) {
    this.forgotPasswordPhase1Form = this.fb.group({
      email: ['', [Validators.required]],
    });
    this.forgotPasswordPhase2Form = this.fb.group({
      code: [
        '',
        [
          Validators.required,
          Validators.minLength(ValidationConstant.EMAIL_VERIFICATION_CODE_LENGTH),
          Validators.maxLength(ValidationConstant.EMAIL_VERIFICATION_CODE_LENGTH),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(ValidationConstant.PASSWORD_MINLENGHT),
          Validators.maxLength(ValidationConstant.PASSWORD_MAXLENGTH),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(ValidationConstant.PASSWORD_MINLENGHT),
          Validators.maxLength(ValidationConstant.PASSWORD_MAXLENGTH),
        ],
      ],
    });
  }

  onSubmitPhase1(event: Event) {
    if (this.forgotPasswordPhase1Form.valid) {
      
    } else {
      this.toastService.showError('Error', 'Invalid Form Data');
    }
  }
  onSubmitPhase2(event: Event) {
    var password = this.forgotPasswordPhase2Form.get('password')?.value;
    var confirmPassword =
      this.forgotPasswordPhase2Form.get('confirmPassword')?.value;
    if (password != confirmPassword) {
      this.toastService.showError(
        'Error',
        'Password and Confirm Password Not Match'
      );
    }
    if (this.forgotPasswordPhase2Form.valid) {
      
    } else {
      this.toastService.showError('Error', 'Invalid Form Data');
    }
  }
}
