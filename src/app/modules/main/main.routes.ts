import { Routes } from '@angular/router';
import { authGuard } from '../../cores/guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

export const HOME_ROUTE = 'haha';
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
    ],
  },
] as Routes;
