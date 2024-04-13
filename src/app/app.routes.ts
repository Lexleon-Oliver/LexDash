import { Routes } from '@angular/router';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: DashboardPageComponent ,
  },
  {
    path: 'notifications',
    component: NotificationsPageComponent,

  },
  {
    path: '**',
    component: Error404PageComponent
  },
];
