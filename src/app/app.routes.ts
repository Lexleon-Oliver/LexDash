import { Routes } from '@angular/router';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';

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
    path: 'components/cards',
    component: CardsPageComponent,

  },
  {
    path: '**',
    component: Error404PageComponent
  },
];
