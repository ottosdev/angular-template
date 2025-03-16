import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { CadastroComponent } from './pages/private/cadastro-mulher/cadastro/cadastro.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'cadastro-mulher', component: CadastroComponent },
      {
        path: 'profile',
        loadChildren: () =>
          import('./pages/private/profile/profile.routes').then((m) => m.profileRoutes),
      },
    ],
  },
];
