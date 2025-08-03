import { Routes } from '@angular/router';
import { authGuard } from '../../cores/guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { MyCourseComponent } from './my-course/my-course.component';
import { HistoryRegisterComponent } from './history-register/history-register.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BlogManagementComponent } from './blog-management/blog-management.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { MentorManagementComponent } from './mentor-management/mentor-management.component';
import { SchoolManagementComponent } from './school-management/school-management.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { WorkshopManagementComponent } from './workshop-management/workshop-management.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

export const HOME_ROUTE = 'home';
export const MY_COURSE_ROUTE = 'my-course';
export const HISTORY_REGISTER = 'history-register';
export const ACCOUNT_SETTING = 'account-setting';
export const CHANGE_PASSWORD = 'change-password';
export const DETAIL_COURSE = 'my-course/detail-course';
export const ADMIN_DASHBOARD = 'admin-dashboard';
export const BLOG_MANAGEMENT = 'blog-management';
export const COURSE_MANAGEMENT = 'course-management';
export const MENTOR_MANAGEMENT = 'mentor-management';
export const SCHOOL_MANAGEMENT = 'school-management';
export const STUDENT_MANAGEMENT = 'student-management';
export const WORKSHOP_MANAGEMENT = 'workshop-management';
export const STUDENT_DETAIL = 'student-management/student-id';

export default [
  {
    path: 'main',
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
      {
        path: ADMIN_DASHBOARD,
        component: AdminDashboardComponent
      },
      {
        path: BLOG_MANAGEMENT,
        component: BlogManagementComponent
      },
      {
        path: COURSE_MANAGEMENT,
        component: CourseManagementComponent
      },
      {
        path: MENTOR_MANAGEMENT,
        component: MentorManagementComponent
      },
      {
        path: SCHOOL_MANAGEMENT,
        component: SchoolManagementComponent
      },
      {
        path: STUDENT_MANAGEMENT,
        component: StudentManagementComponent
      },
      {
        path: WORKSHOP_MANAGEMENT,
        component: WorkshopManagementComponent
      },
      {
        path: STUDENT_DETAIL,
        component: StudentDetailComponent
      }
    ],
  },
  {
    path: DETAIL_COURSE,
    component: DetailCourseComponent
  }
] as Routes;
