import { Component } from '@angular/core';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';
import { BorderedTabsComponent } from '../../components/bordered-tabs/bordered-tabs.component';
import { ProfileOverviewComponent } from '../../components/profile-overview/profile-overview.component';
import { EditProfileComponent } from '../../components/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from '../../components/change-password/change-password.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    PageTitleComponent,
    ProfileCardComponent,
    BorderedTabsComponent,
    ProfileOverviewComponent,
    EditProfileComponent,
    ChangePasswordComponent,
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {

}
