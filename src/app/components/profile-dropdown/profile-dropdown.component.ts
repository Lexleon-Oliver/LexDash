import { ProfileItemComponent } from './../profile-item/profile-item.component';
import { Component } from '@angular/core';
import { AuthUserService } from '../../services/auth-user.service';
import { ProfileMenuItem } from '../../models/profile-menu-item';

@Component({
  selector: 'app-profile-dropdown',
  standalone: true,
  imports: [
    ProfileItemComponent,
  ],
  templateUrl: './profile-dropdown.component.html',
  styleUrl: './profile-dropdown.component.scss'
})
export class ProfileDropdownComponent {

  ProfileMenuList!: ProfileMenuItem[];

  constructor(
    public authUserService:AuthUserService,
  ){
    this.ProfileMenuList = [
      {
        icon:"bi bi-person",
        label:"Perfil",
        url: "/profile"
      },
      {
        icon:"bi bi-gear",
        label:"Configurações",
        url: "/configurations"
      },
      {
        icon:"bi bi-question-circle",
        label:"Precisa de ajuda?",
        url: "/help"
      },
      {
        icon:"bi bi-box-arrow-right",
        label:"Sair",
        url: "/logout"
      },
    ];
  }

}
