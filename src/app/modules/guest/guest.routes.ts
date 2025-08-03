import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailRegistrationComponent } from './verify-email-registration/verify-email-registration.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { AllMentorComponent } from './all-mentor/all-mentor.component';
import { AllSchoolComponent } from './all-school/all-school.component';
import { AllBlogComponent } from './all-blog/all-blog.component';
import { AllWorkshopComponent } from './all-workshop/all-workshop.component';
import { QAndAComponent } from './q-and-a/q-and-a.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';
import { DetailWorkshopComponent } from './detail-workshop/detail-workshop.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { DetailQAndAComponent } from './detail-q-and-a/detail-q-and-a.component';
import { ProfileMentorComponent } from './profile-mentor/profile-mentor.component';
import { ProfileSchoolComponent } from './profile-school/profile-school.component';
export const HOME_ROUTE = '';
export const LOGIN_ROUTE = 'login';
export const FORGOT_PASSWORD_ROUTE = 'forgot-password';
export const SIGN_UP_ROUTE = 'sign-up';
export const VERIFY_EMAIL_REGISTRATION_ROUTE = 'verify-email-registration';
export const ALL_COURSE_ROUTE = 'all-course';
export const ALL_MENTOR_ROUTE = 'all-mentor';
export const ALL_SCHOOL_ROUTE = 'all-school';
export const ALL_BLOG_ROUTE = 'all-blog';
export const ALL_WORKSHOP_ROUTE = 'all-workshop';
export const QNA_ROUTE = 'q-and-a';
export const DETAIL_COURSE_ROUTE = 'detail-course';
export const DETAIL_WORKSHOP_ROUTE = 'detail-workshop';
export const DETAIL_BLOG_ROUTE = 'detail-blog';
export const DETAIL_QNA_ROUTE = 'detail-q-and-a';
export const PROFILE_MENTOR = 'profile-mentor';
export const PROFILE_SCHOOL = 'profile-school';
export default [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: HOME_ROUTE,
        component: HomeComponent,
      },
      {
        path: ALL_COURSE_ROUTE,
        component: AllCourseComponent
      },
      {
        path: ALL_MENTOR_ROUTE,
        component: AllMentorComponent
      },
      {
        path: ALL_SCHOOL_ROUTE,
        component: AllSchoolComponent
      },
      {
        path: ALL_BLOG_ROUTE,
        component: AllBlogComponent
      },
      {
        path: ALL_WORKSHOP_ROUTE,
        component: AllWorkshopComponent
      },
      {
        path: QNA_ROUTE,
        component: QAndAComponent
      },
      {
        path: DETAIL_COURSE_ROUTE,
        component: DetailCourseComponent
      },
      {
        path: DETAIL_WORKSHOP_ROUTE,
        component: DetailWorkshopComponent
      },
      {
        path: DETAIL_BLOG_ROUTE,
        component: DetailBlogComponent
      },
      {
        path: DETAIL_QNA_ROUTE,
        component: DetailQAndAComponent
      },
      {
        path: PROFILE_MENTOR,
        component: ProfileMentorComponent
      },
      {
        path: PROFILE_SCHOOL,
        component: ProfileSchoolComponent
      }
    ],
  },
  {
    path: LOGIN_ROUTE,
    component: LoginComponent
  },
  {
    path: SIGN_UP_ROUTE,
    component: SignupComponent
  },
  {
    path: FORGOT_PASSWORD_ROUTE,
    component: ForgotPasswordComponent
  },
  {
    path: VERIFY_EMAIL_REGISTRATION_ROUTE,
    component: VerifyEmailRegistrationComponent
  }
] as Routes;
