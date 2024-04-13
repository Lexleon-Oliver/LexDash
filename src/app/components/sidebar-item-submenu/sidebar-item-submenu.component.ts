import { Component, Input } from '@angular/core';
import { ItemSubmenu } from '../../models/item-submenu';
import { SidebarMenulistService } from '../../services/sidebar-menulist.service';

@Component({
  selector: 'app-sidebar-item-submenu',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-item-submenu.component.html',
  styleUrl: './sidebar-item-submenu.component.scss'
})
export class SidebarItemSubmenuComponent {

  @Input() submenu!: ItemSubmenu;

  constructor(
    private sidebarService: SidebarMenulistService
  ){
  }

  redirect() {
   this.sidebarService.goToUrl(this.submenu.url);
  }
}
