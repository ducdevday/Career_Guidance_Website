import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/guest/guest.routes'),
      },
      {
        path: '',
        loadChildren: () => import('./modules/main/main.routes'),
      },
    ],
  },
];
