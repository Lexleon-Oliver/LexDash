import { Injectable } from '@angular/core';
import { ItemMenu } from '../models/item-menu';

@Injectable({
  providedIn: 'root'
})
export class SidebarMenulistService {

  private menuList:ItemMenu[] = [
    {
      id:"dashboard-nav",
      label: "Dashboard",
      icon: "bi bi-grid",
      submenus: []
    },
    {
      id:"components-nav",
      label: "Components",
      icon: "bi bi-menu-button-wide",
      submenus:[
        {
          label: "Alerts",
          url: "/alerts"
        }
      ]
    },

  ];

  constructor() { }

  getMenuList():ItemMenu[]{
    return this.menuList;
  }

}
