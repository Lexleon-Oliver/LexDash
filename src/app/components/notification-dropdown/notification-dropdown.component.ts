import { Component } from '@angular/core';
import { NotificationItemComponent } from '../notification-item/notification-item.component';
import { NotificationItem } from '../../models/notification-item';
import { NotificationsService } from '../../services/notifications.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notification-dropdown',
  standalone: true,
  imports: [
    NotificationItemComponent,
  ],
  templateUrl: './notification-dropdown.component.html',
  styleUrl: './notification-dropdown.component.scss'
})
export class NotificationDropdownComponent {
  notificationList!: NotificationItem[];

  constructor(
    public notificationsService: NotificationsService,
    private router: Router,
  ){
    this.notificationList= notificationsService.getNotifications();
  }

  viewAllNotifications() {
    this.router.navigate(['users/notifications']);
  }
}
