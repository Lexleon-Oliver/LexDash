import { Injectable } from '@angular/core';
import { NotificationItem } from '../models/notification-item';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private notificationList: NotificationItem[] = [
    {
      id:0,
      title:"Lorem Ipsum",
      content:"Quae dolorem earum veritatis oditseno",
      dateTime: "há 30 min.",
      icon:"bi bi-exclamation-circle text-warning",
      readed: false
    },
    {
      id:1,
      title:"Atque rerum nesciunt",
      content:"Quae dolorem earum veritatis oditseno",
      dateTime: "há 1 hr.",
      icon:"bi bi-x-circle text-danger",
      readed: false
    },
    {
      id:2,
      title:"Sit rerum fuga",
      content:"Quae dolorem earum veritatis oditseno",
      dateTime: "há 2 hrs.",
      icon:"bi bi-check-circle text-success",
      readed: true
    },
    {
      id:3,
      title:"Dicta reprehenderit",
      content:"Quae dolorem earum veritatis oditseno",
      dateTime: "há 4 hrs.",
      icon:"bi-info-circle text-primary",
      readed: true
    },
  ];


  constructor() { }

  getNotifications(): NotificationItem[] {
    return this.notificationList;
  }

  getNotificationsSize(): number{
    return this.notificationList.length;
  }

  markAsRead(id: number): void {
    for (let i = 0; i < this.notificationList.length; i++) {
      if (this.notificationList[i].id === id) {
        this.notificationList[i].readed = true;
        break;
      }
    }
  }

  //return the number of unreaded notifications
  getUnreadedNotificationsSize(): number{
    let unreadedNotificationsSize = 0;
    for (let i = 0; i < this.notificationList.length; i++) {
      if (!this.notificationList[i].readed) {
        unreadedNotificationsSize++;
      }
    }
    return unreadedNotificationsSize;
  }


}
