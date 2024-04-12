import { SidebarMenulistService } from './../../services/sidebar-menulist.service';
import { Component } from '@angular/core';
import { SidebarItemMenuComponent } from '../sidebar-item-menu/sidebar-item-menu.component';
import { ItemMenu } from '../../models/item-menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarItemMenuComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  menuList!: ItemMenu[];

  constructor(
    private sidebarMenulistService: SidebarMenulistService
  ){
    this.menuList = this.sidebarMenulistService.getMenuList();
  }

}
