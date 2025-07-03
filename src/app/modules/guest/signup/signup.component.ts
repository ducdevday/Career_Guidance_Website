import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService } from '../../../services/toast.service';
import { Router } from '@angular/router';
import { LOGIN_ROUTE } from '../guest.routes';
import { ValidationConstant } from '../../../shared/constant/validation-constant';
import { ValidationRegex } from '../../../shared/constant/validation-regex';
import { CommonModule } from '@angular/common';
import { StandardInputLabelComponent } from "../../../shared/components/standard-input-label/standard-input-label.component";
import { GenderTypeData } from '../../../shared/enums/gender-type';
import { DropdownModule } from 'primeng/dropdown';
import { StandardButtonComponent } from "../../../shared/components/standard-button/standard-button.component";
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { StandardFormErrorComponent } from '../../../shared/components/standard-form-error/standard-form-error';
import { Store } from '@ngrx/store';
import { AppState } from '../../../stores/app.state';
import { signupAction } from '../../../stores/signup/signup.action';
import { DateUtil } from '../../../shared/helpers/date-util';
import { SignUpRequest } from '../../../dtos/request/signup-request';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [    CommonModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    StandardButtonComponent,
    ReactiveFormsModule,
    StandardInputLabelComponent, 
    StandardFormErrorComponent
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signUpForm: FormGroup;
  genderTypes = GenderTypeData
  onSigningUp = false;
  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.signUpForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.maxLength(ValidationConstant.EMAIL_MAXLENGTH),
        ],
      ],
      firstName: [
        '',
        [
          Validators.required,
          Validators.maxLength(ValidationConstant.NAME_MAXLENGTH),
        ],
      ],
      middleName: [
        '',
        [Validators.maxLength(ValidationConstant.NAME_MAXLENGTH)],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.maxLength(ValidationConstant.NAME_MAXLENGTH),
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
      dateOfBirth: ['', [Validators.required]],
      gender: [null, [Validators.required]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(ValidationRegex.PHONE_REGEX)],
      ],
      agreeTerms: [false, [Validators.requiredTrue]],
    });
    
  }

  onSubmit(event: Event) {
    if (this.signUpForm.valid) {
      const request: SignUpRequest = {
        ...this.signUpForm.value,
        dateOfBirth: DateUtil.convertToUtcString(this.signUpForm.get('dateOfBirth')?.value),
        gender: this.signUpForm.get('gender')?.value.value,
      };
      
      this.store.dispatch(signupAction({ request }));
    } else {
      this.toastService.showError('Error', 'Invalid form data');
    }
  }

  navigateToLogin() {
    this.router.navigate([`/${LOGIN_ROUTE}`]);
  }
}
