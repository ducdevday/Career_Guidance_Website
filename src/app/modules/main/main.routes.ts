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
import { MentorDetailComponent } from './mentor-detail/mentor-detail.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { WorkshopDetailComponent } from './workshop-detail/workshop-detail.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';

export const HOME_ROUTE = 'home';
export const MY_COURSE_ROUTE = 'my-course';
export const HISTORY_REGISTER = 'history-register';
export const ACCOUNT_SETTING = 'account-setting';
export const CHANGE_PASSWORD = 'change-password';

export const ADMIN_DASHBOARD = 'admin-dashboard';
export const BLOG_MANAGEMENT = 'blog-management';
export const COURSE_MANAGEMENT = 'course-management';
export const MENTOR_MANAGEMENT = 'mentor-management';
export const SCHOOL_MANAGEMENT = 'school-management';
export const STUDENT_MANAGEMENT = 'student-management';
export const WORKSHOP_MANAGEMENT = 'workshop-management';

export const BLOG_DETAIL = (blogId: string | number) =>
  `main/${BLOG_MANAGEMENT}/${blogId}`;

export const STUDENT_DETAIL = (studentId: string | number) =>
  `main/${STUDENT_MANAGEMENT}/${studentId}`;

export const MENTOR_DETAIL = (mentorId: string | number) =>
  `main/${MENTOR_MANAGEMENT}/${mentorId}`;

export const SCHOOL_DETAIL = (schoolId: string | number) =>
  `main/${SCHOOL_MANAGEMENT}/${schoolId}`;

export const WORKSHOP_DETAIL = (workshopId: string | number) =>
  `main/${WORKSHOP_MANAGEMENT}/${workshopId}`;

export const COURSE_DETAIL = (courseId: string | number) =>
  `main/${COURSE_MANAGEMENT}/${courseId}`;

export const CHAPTER_DETAIL = (courseId: string | number, chapterId: string | number) =>
  `main/${COURSE_MANAGEMENT}/${courseId}/chapter-management/${chapterId}`;

export const LESSON_DETAIL = (
  courseId: string | number,
  chapterId: string | number,
  lessonId: string | number
) => `main/${COURSE_MANAGEMENT}/${courseId}/chapter-management/${chapterId}/lesson-management/${lessonId}`;


export default [
  {
    path: 'main',
    canActivate: [authGuard],
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: HOME_ROUTE },

      { path: HOME_ROUTE, component: HomeComponent },
      { path: MY_COURSE_ROUTE, component: MyCourseComponent },
      { path: HISTORY_REGISTER, component: HistoryRegisterComponent },
      { path: ACCOUNT_SETTING, component: AccountSettingComponent },
      { path: CHANGE_PASSWORD, component: ChangePasswordComponent },

      { path: ADMIN_DASHBOARD, component: AdminDashboardComponent },

      // BLOG
      { path: BLOG_MANAGEMENT, component: BlogManagementComponent },
      { path: `${BLOG_MANAGEMENT}/:blogId`, component: BlogDetailComponent },

      // COURSE (có phân cấp chapter/lesson)
      {
        path: COURSE_MANAGEMENT,
        children: [
          { path: '', component: CourseManagementComponent },
          { path: ':courseId', component: CourseDetailComponent },
          {
            path: ':courseId/chapter-management/:chapterId',
            children: [
              { path: '', component: ChapterDetailComponent },
              { path: 'lesson-management/:lessonId', component: LessonDetailComponent }
            ]
          }
        ]
      },

      // MENTOR
      { path: MENTOR_MANAGEMENT, component: MentorManagementComponent },
      { path: `${MENTOR_MANAGEMENT}/:mentorId`, component: MentorDetailComponent },

      // SCHOOL
      { path: SCHOOL_MANAGEMENT, component: SchoolManagementComponent },
      { path: `${SCHOOL_MANAGEMENT}/:schoolId`, component: SchoolDetailComponent },

      // STUDENT
      { path: STUDENT_MANAGEMENT, component: StudentManagementComponent },
      { path: `${STUDENT_MANAGEMENT}/:studentId`, component: StudentDetailComponent },

      // WORKSHOP
      { path: WORKSHOP_MANAGEMENT, component: WorkshopManagementComponent },
      { path: `${WORKSHOP_MANAGEMENT}/:workshopId`, component: WorkshopDetailComponent },
    ],
  },

  // Trang chi tiết course public (nếu bạn muốn tách ngoài layout main)
  { path: 'my-course/detail-course', component: DetailCourseComponent },

  // Redirects
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: '**', redirectTo: 'main' }
] as Routes;
