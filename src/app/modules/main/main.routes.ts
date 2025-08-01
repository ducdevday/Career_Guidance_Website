import { Routes } from '@angular/router';
import { authGuard } from '../../cores/guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { MyCourseComponent } from './my-course/my-course.component';
import { HistoryRegisterComponent } from './history-register/history-register.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';

export const HOME_ROUTE = 'home';
export const MY_COURSE_ROUTE = 'my-course';
export const HISTORY_REGISTER = 'history-register';
export const ACCOUNT_SETTING = 'account-setting';
export const CHANGE_PASSWORD = 'change-password';
export const DETAIL_COURSE = 'my-course/detail-course'
export default [
  {
    path: '',
    canActivate: [authGuard],
    component: LayoutComponent,
    children: [
      {
        path: HOME_ROUTE,
        component: HomeComponent,
      },
      {
        path: MY_COURSE_ROUTE,
        component: MyCourseComponent
      },
      {
        path: HISTORY_REGISTER,
        component: HistoryRegisterComponent
      },
      {
        path: ACCOUNT_SETTING,
        component: AccountSettingComponent
      },
      {
        path: CHANGE_PASSWORD,
        component: ChangePasswordComponent
      },
    ],
  },
  {
    path: DETAIL_COURSE,
    component: DetailCourseComponent
  }
] as Routes;
