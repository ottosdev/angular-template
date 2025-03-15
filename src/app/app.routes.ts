import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'profile',
        loadChildren: () =>
          import('./pages/private/profile/profile.routes').then((m) => m.profileRoutes),
      },
    ],
  },
];
