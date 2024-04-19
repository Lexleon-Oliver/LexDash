import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../components/page-layout/page-layout.component';
import { NotificationsItemListComponent } from '../../components/notifications-item-list/notifications-item-list.component';
import { NotificationsService } from '../../services/notifications.service';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [
    PageLayoutComponent,
    NotificationsItemListComponent,
    CardComponent,
  ],
  templateUrl: './notifications-page.component.html',
  styleUrl: './notifications-page.component.scss'
})
export class NotificationsPageComponent {
  constructor(
    public notificationService: NotificationsService
  ) {}

}
