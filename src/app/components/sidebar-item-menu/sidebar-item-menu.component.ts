import { Component, Input } from '@angular/core';
import { ItemMenu } from '../../models/item-menu';
import { SidebarItemSubmenuComponent } from '../sidebar-item-submenu/sidebar-item-submenu.component';
import { log } from 'console';
import { SidebarMenulistService } from '../../services/sidebar-menulist.service';

@Component({
  selector: 'app-sidebar-item-menu',
  standalone: true,
  imports: [
    SidebarItemSubmenuComponent,
  ],
  templateUrl: './sidebar-item-menu.component.html',
  styleUrl: './sidebar-item-menu.component.scss'
})
export class SidebarItemMenuComponent {

  @Input() itemMenu!:ItemMenu;

  constructor(
    private sidebarService: SidebarMenulistService
  ){
  }

  menuItemClicked() {
    this.sidebarService.goToUrl('home')
  }
}
