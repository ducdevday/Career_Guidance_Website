import { Routes } from '@angular/router';
import { authGuard } from '../../cores/guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { MyCourseComponent } from './my-course/my-course.component';

export const HOME_ROUTE = 'home';
export const MY_COURSE_ROUTE = 'my-course';
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
      }
    ],
  },
] as Routes;
