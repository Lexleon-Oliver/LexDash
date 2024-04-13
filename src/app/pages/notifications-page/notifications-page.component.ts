import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../components/page-layout/page-layout.component';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [
    PageLayoutComponent,
  ],
  templateUrl: './notifications-page.component.html',
  styleUrl: './notifications-page.component.scss'
})
export class NotificationsPageComponent {

}
