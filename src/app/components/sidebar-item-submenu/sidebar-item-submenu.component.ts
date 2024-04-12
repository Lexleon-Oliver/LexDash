import { Component, Input } from '@angular/core';
import { ItemSubmenu } from '../../models/item-submenu';

@Component({
  selector: 'app-sidebar-item-submenu',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-item-submenu.component.html',
  styleUrl: './sidebar-item-submenu.component.scss'
})
export class SidebarItemSubmenuComponent {

  @Input() submenu!: ItemSubmenu;

  constructor(){
  }

}
