import { Component } from '@angular/core';
import { AuthUserService } from '../../services/auth-user.service';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
dadosUsuario: any={};

constructor(
  private authService: AuthUserService
){
  this.dadosUsuario.nome= authService.getFirstAndLastName();
  this.dadosUsuario.cargo= authService.getOccupation();
}

}
