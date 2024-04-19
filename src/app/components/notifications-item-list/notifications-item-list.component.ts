import { Component, Input } from '@angular/core';
import { NotificationItem } from '../../models/notification-item';
import { CommonModule } from '@angular/common';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-notifications-item-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './notifications-item-list.component.html',
  styleUrl: './notifications-item-list.component.scss'
})
export class NotificationsItemListComponent {

  @Input() notificacao! : NotificationItem;

  constructor(
    private notificationService: NotificationsService
  ){}

  onClick() {
    this.notificationService.markAsRead(this.notificacao.id);

  }
}
