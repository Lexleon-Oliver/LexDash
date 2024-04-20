import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { AuthUserService } from '../../services/auth-user.service';

@Component({
  selector: 'app-profile-overview',
  standalone: true,
  imports: [],
  templateUrl: './profile-overview.component.html',
  styleUrl: './profile-overview.component.scss'
})
export class ProfileOverviewComponent implements OnInit{
  camposPerfil:{ label: string; value: string; }[] = [];
  usuario!: UserModel;

  constructor(
    private authService: AuthUserService,
  ){
    this.usuario = this.authService.getUserLogged();
  }

  ngOnInit() {
    this.setCamposPerfil();
  }

  setCamposPerfil(){
    this.camposPerfil.push(
      { label: 'Nome Completo', value: this.usuario.fullName },
      { label: 'Empresa', value: this.usuario.company },
      { label: 'Cargo', value: this.usuario.job },
      { label: 'Cidade', value: this.usuario.city },
      { label: 'Endereço', value: this.usuario.address},
      { label: 'Telefone', value: this.usuario.phone },
      { label: 'E-mail', value: this.usuario.email }
    )
  }

}
