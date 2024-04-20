import { Component, Input } from '@angular/core';
import { NotificationItem } from '../../models/notification-item';
import { SlicePipe } from '@angular/common';
import { NotificationsService } from '../../services/notifications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-item',
  standalone: true,
  imports: [
    SlicePipe
  ],
  templateUrl: './notification-item.component.html',
  styleUrl: './notification-item.component.scss'
})
export class NotificationItemComponent {

  @Input() notification!: NotificationItem;

  constructor(
    private notificationService: NotificationsService,
    private router: Router,
  ) {

  }

  readNotification() {
    this.notificationService.setSelectedNotification(this.notification);
    this.notificationService.markAsRead(this.notification.id);
    this.router.navigate(['users/notifications/']);

  }

}

