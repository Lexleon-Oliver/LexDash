import { Routes } from '@angular/router';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';

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
    path: 'users/notifications',
    component: NotificationsPageComponent,

  },
  {
    path: 'users/profile',
    component: ProfilePageComponent,

  },
  {
    path: 'users/tasks',
    component: TasksPageComponent,

  },
  {
    path: 'components/cards',
    component: CardsPageComponent,

  },
  {
    path: '**',
    component: Error404PageComponent
  },
];
