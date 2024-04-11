import { Component } from '@angular/core';
import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component';
import { NotificationComponent } from '../notification/notification.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [
    ThemeSelectorComponent,
    NotificationComponent,
    ProfileComponent,
  ],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss'
})
export class NavHeaderComponent {

}
